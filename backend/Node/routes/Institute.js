const router = require('express').Router();
const Institute = require("../model/institutes");
const verify = require("./TokenVerification");
const Request = require("../model/institutes")

const {instituteValidation} = require("../validation/validation")

router.post('/register', verify, async (req, res) => {
    const {error} = instituteValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    console.log(req.user._id)
    const ins = new Institute({
        user_id:req.user._id,
        name:req.body.name,
        location:req.body.location,
    });
    try {
        const savedInstitute = await ins.save();
        res.send({institue:ins._id, name:ins.name, location:ins.location, user:ins.user_id})
    }catch (e) {
        res.status(400).send(e);
    }
});

router.get("/details", verify ,(req,res)=>{
    Institute.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.get("/details/:_id", verify, async (req,res)=>{
    Institute.findById(req.params._id,(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.put("/update/:_id",verify, async (req, res, next) => {
    Institute.findByIdAndUpdate(req.params._id, req.body, (err, user) => {
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

router.delete("/delete/:_id", verify ,(req,res)=>{
    Institute.findByIdAndRemove(req.params._id,(err)=>{
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

router.get("/", verify ,(req,res)=>{
    Institute.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.get("/ins",verify,(req,res)=>{
    Institute.find({name:req.body.name},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
})

module.exports = router;
