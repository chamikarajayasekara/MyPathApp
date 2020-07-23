const express = require('express');
const router = express.Router();
const {User} = require('../model/user')
const {auth} = require('../middleware/auth')

router.get("/auth",auth ,(req,res)=>{
    res.status(200).json({
        _id:req.user._id,
        isAuth:true,
        email: req.user.email,
        name:req.user.name,
        lastname:req.user.lastname,
        role:req.user.role,
    });
});

router.post('/register',(req , res)=>{
    const user = new User(req.body);

    user.save((err,doc) => {
        if(err) return res.json({success:false,err});
        res.status(200).json({
            success: true,
            userData:doc
        })
    })
    console.log(user)
})

router.post('/login', (req,res)=>{
    //find email
    User.findOne({email: req.body.email}, (err,user) =>{
        if (!user)
            return res.json({
                loginSuccess:false,
                message:"Login failed email not found"
            });
        //check pw same or not
        user.comparePassword(req.body.password, (err, isMatch) =>{
            if (!isMatch){
                return res.json({
                    loginSuccess: false,
                    message: "Wrong password"
                })
            }
        })
        //generate token
        user.generateToken((err, user)=>{
            if (err) return res.status(400).send(err);
            res.cookie("x_authExp", user.tokenExp);
            res.cookie("x_auth", user.token)
                .status(200)
                .json({
                    loginSuccess:true
                })
        })
    })
})

router.get('/logout', auth, (req,res)=>{
    User.findOneAndUpdate({_id:req.user._id},{token:""},(err,doc)=>{
        if (err) return res.json({success:false, err})
        return res.status(200).send({
            success:true
        })
    })
})


module.exports = router;
