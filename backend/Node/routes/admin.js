const verify = require('./TokenVerification')
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const Admin = require("../model/Admin")
const {adminValidation,loginValidation} = require('../validation/validation')

router.post('/Adminreg', async (req, res,next) => {

    // VALIDATE BEFORE SAVING A USER
    const {error} = adminValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    //email exist or not
    const emailExist =await  Admin.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send("Email already exist");
    //hash password
    const salt = await  bcrypt.genSalt(10);
    const hashedPassword = await  bcrypt.hash(req.body.password, salt);

    const admin = new Admin({
        name:req.body.name,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedAdmin= await admin.save();
        res.send({admin: admin._id,name: admin.name, email:admin.email});
    }catch (e) {
        res.status(400).send(e);
    }

})

//Login
router.post('/Adminlogin',async (req,res)=>{
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //email exist or not
    const admin =await  Admin.findOne({email: req.body.email});
    if (!admin) return res.status(400).send("Email not found");
    //password is correct
    const validPass = await bcrypt.compare(req.body.password , admin.password);
    if (!validPass) return res.status(400).send('Invalid password');

    //token creation
    // const token = jwt.sign({_id: user._id,name: user.name}, process.env.TOKEN_SECRET);
    // res.header('auth-token',token).send(token)
    const token = jwt.sign(
        { _id: admin._id, email: admin.email, name: admin.name },
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
                name: admin.name,
                id:admin._id
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

router.get("/details", verify ,(req,res)=>{
    Admin.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.get('/auth',verify,(req,res)=>{
    res.status(200).json({
        id:req.user._id,
        email: req.user.email,
        name:req.user.name,
    });
})

//Logout
router.get('/logout', verify, (req,res)=>{
    Admin.findOneAndUpdate({id:req.user._id},{token:""}, (err)=>{
        if (err) return res.json({success:false, err})
        return res.status(200).send({
            success:true
        })
    })
})

router.delete("/delete/:_id", verify ,(req,res)=>{
    Admin.findByIdAndRemove(req.params._id,(err)=>{
        if (err) {
            return res.status(404).send({
                message: "user not found with id " + req.params._id
            });
        }else {
            return res.status(200).send({
                message: "deleted" + req.params._id
            });
        }
    })
});
module.exports = router;
