const router = require('express').Router();
const {subjectsValidation} = require("../validation/validation");
const Subject = require("../model/subjects");

router.post('/register', async (req, res) => {
    const {error} = subjectsValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const nameExist =await Subject.findOne({name: req.body.name});
    if (nameExist) return res.status(400).send("Subject already exist");

    const subject = new Subject({
        name:req.body.name,
        arts:req.body.arts,
        commerce:req.body.commerce,
        bio:req.body.bio,
        physical:req.body.physical,
        etec:req.body.etec,
        btec:req.body.btec,
    });
    try {
        const savedSubject = await subject.save();
        res.send(savedSubject);
    }catch (e) {
        res.status(400).send(e);
    }

})

router.get("/arts",(req,res)=>{
    Subject.find({arts:"yes"},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});
router.get("/bio",(req,res)=>{
    Subject.find({bio:"yes"},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});
router.get("/com",(req,res)=>{
    Subject.find({commerce:"yes"},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});
module.exports = router;
