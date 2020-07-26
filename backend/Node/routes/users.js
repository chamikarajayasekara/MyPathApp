const express = require('express');
const router = express.Router();
const {User} = require('../model/user')
const verify = require('./TokenVerification')



// router.get("/auth",auth ,(req,res)=>{
//     res.status(200).json({
//         _id:req.user._id,
//         isAdmin: req.user.role === 0 ? false : true,
//         isAuth:true,
//         email: req.user.email,
//         name:req.user.name,
//         lastname:req.user.lastname,
//         role:req.user.role,
//     });
// });

router.get('/',verify,(req,res)=>{
    res.send(req.user);
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
                    message: "Wrong password",

                })
            }
        })
        //generate token
        user.generateToken((err, user)=>{
            if (err) return res.status(400).send(err);
            // res.cookie("x_authExp", user.tokenExp);
            // res.cookie("x_auth", user.token);
            res.header("auth-token",user.token)
                .status(200)
                .json({
                    loginSuccess:true,
                    token:user.token,
                    name:user.name,
                })
        })
    })
})

// router.post("/enter", async (req,res, next)=>{
//     const user = await User.findOne({email:req.body.email});
//     if (!user) return res.status(400).send("Email is not found");
//
//     const validPass = await User.checkPassword(req.body.password, user.password);
//     if (!validPass) return req.status(400).send("Invalid password");
//
//     const token = jwt.sign(
//         {email: user.email, name: user.name},
//         process.env.SECRET_KEY,
//         {
//             expiresIn: 6048000
//         }
//     );
//     try {
//         res.json({
//             success:true,
//             token:token
//         }).send();
//     }catch (e) {
//         res.json({
//             success:false,
//             message:e
//         })
//     }
// })

// router.get('/logout', auth, (req,res)=>{
//     User.findOneAndUpdate({_id:req.user._id},{token:""},(err,doc)=>{
//         if (err) return res.json({success:false, err})
//         return res.status(200).send({
//             success:true
//         })
//     })
// })


module.exports = router;
