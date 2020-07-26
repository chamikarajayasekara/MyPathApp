const router = require('express').Router();
const User2 = require('./User2');
const bcrypt = require('bcryptjs')
const {registerValidation,loginValidation} = require('../validation/validation')
const jwt = require('jsonwebtoken')
const verify = require('./TokenVerification')


router.get('/', (req,res)=>{
    res.send("helo")
})

router.post('/register', async (req, res) => {

    // VALIDATE BEFORE SAVING A USER
    // const {error} = registerValidation(req.body)
    // if (error) return res.status(400).send(error.details[0].message);
    //email exist or not
    const emailExist =await  User2.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send("Email already exist");
    //hash password
    const salt = await  bcrypt.genSalt(10);
    const hashedPassword = await  bcrypt.hash(req.body.password, salt);

    const user = new User2({
        name:req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id,name: user.name, email:user.email});
    }catch (e) {
        res.status(400).send(e);
    }

})

//Login
router.post('/login',async (req,res)=>{
    // const {error} = loginValidation(req.body);
    // if (error) return res.status(400).send(error.details[0].message+"xxxx");

    //email exist or not
    const user =await  User2.findOne({email: req.body.email});
    if (!user) return res.status(400).send("Email not found");
    //password is correct
    const validPass = await bcrypt.compare(req.body.password , user.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //token creation
    // const token = jwt.sign({_id: user._id,name: user.name}, process.env.TOKEN_SECRET);
    // res.header('auth-token',token).send(token)
    const token = jwt.sign(
        { _id: user._id, email: user.email, name: user.name },
        process.env.TOKEN_SECRET,
        {
            expiresIn: 6048000
        }
    );
    try {
        res
            .json({
                success: true,
                token: token,
                name: user.name
                //token: "JWT " + token
            })
            .send();
        //res.header("auth_token", token).send();
    } catch (error) {
        res.json({
            success: false,
            error:error
        })
    }
})

//Logout
router.get('/logout', verify, (req,res)=>{
    User2.findOneAndUpdate({_id:req.user._id},{token:""}, (err)=>{
        if (err) return res.json({success:false, err})
        return res.status(200).send({
            success:true
        })
    })
})

//auth

router.get("/auth",verify ,(req,res)=>{
    const token = res.header("auth-token");
    // if (token === )
    res.status(200).json({
        _id:req.user._id,
        email: req.user.email,
        name:req.user.name,
    });
});

module.exports = router;
