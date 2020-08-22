const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs')
const {registerValidation,loginValidation} = require('../validation/validation')
const jwt = require('jsonwebtoken')
const verify = require('./TokenVerification')
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

router.post('/register',async (req, res) => {
    console.log(req.file);

    // VALIDATE BEFORE SAVING A USER
    const {error} = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    //email exist or not
    const emailExist =await  User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send("Email already exist");
    //hash password
    const salt = await  bcrypt.genSalt(10);
    const hashedPassword = await  bcrypt.hash(req.body.password, salt);

    const user = new User({
        name:req.body.name,
        email: req.body.email,
        password: hashedPassword,
        institute:req.body.institute,
        location:req.body.location,
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id,name: user.name, email:user.email,institute:user.institute,location:user.location });
    }catch (e) {
        res.status(400).send(e);
    }

})

//Login
router.post('/login',async (req,res)=>{
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //email exist or not
    const user =await  User.findOne({email: req.body.email});
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
                name: user.name,
                id:user._id,
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
    User.findOneAndUpdate({_id:req.user._id},{token:""}, (err)=>{
        if (err) return res.json({success:false, err})
        return res.status(200).send({
            success:true
        })
    })
})

//auth

router.get("/details/:_id", verify, async (req,res)=>{
    User.findById(req.params._id,(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});
router.get("/", verify ,(req,res)=>{
    User.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.delete("/delete/:_id", verify ,(req,res)=>{
    User.findByIdAndRemove(req.params._id,(err)=>{
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


router.put("/update/:_id", upload.single('image'), verify, async (req, res, next) => {
    User.findByIdAndUpdate(req.params._id, req.body, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: "Fail to Update User."
            });
            console.log(err);
        } else {
            console.log(user);
            res.status(200).send(user);
        }
    });

});

router.post("/name",verify,(req,res)=>{
    User.find({name:req.body.name},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
})



router.put('/image/:id',upload.single('image'),(req,res)=>{
    User.findByIdAndUpdate(req.params._id,req.file.path, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: "Fail to Update User."
            });
            console.log(err);
        } else {
            console.log(user);
            res.status(200).send(user);
        }
    });
});

module.exports = router;
