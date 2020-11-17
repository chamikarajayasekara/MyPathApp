const router = require('express').Router();
const verify = require("./TokenVerification");
const {courseValidation} = require("../validation/validation")
const Course = require('../model/courses');

router.post('/register', verify, async (req, res) => {
    const {error} = courseValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    // console.log(req.ins._id)
    const course = new Course({
        user_id:req.user._id,
        institute:req.body.institute,
        name:req.body.name,
        category:req.body.category,
        level:req.body.level,
        description:req.body.description,
        duration:req.body.duration,
        cost:req.body.cost,
        payments:req.body.payments,
        scholarships:req.body.scholarships,
        qualifications:req.body.qualifications,
        content:req.body.content,
        enrollments:req.body.enrollments,
        contacts:req.body.contacts,
        further:req.body.further,
        career:req.body.career,
    });
    try {
        const savedCourse = await course.save();
        res.json({savedCourse})
    }catch (e) {
        res.status(400).send(e);
    }

});


router.post("/",verify,(req,res)=>{
    Course.find({user_id:req.body.user_id},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
})

router.get("/details/:id", verify, async (req,res)=>{
    Course.findById(req.params.id,(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.get("/dets/:id", async (req,res)=>{
    Course.findById(req.params.id,(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});


router.delete("/delete/:_id", verify ,(req,res)=>{
    Course.findByIdAndRemove(req.params._id,(err)=>{
        if (err) {
            return res.status(404).send({
                message: "Course not found with id " + req.params._id
            });
        }else {
            return res.status(200).send({
                message: "deleted" + req.params._id
            });
        }
    })
});

router.put("/update/:_id",verify, async (req, res, next) => {
    Course.findByIdAndUpdate(req.params._id, req.body, (err, user) => {
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

router.get("/details", verify ,(req,res)=>{
    Course.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});

router.get("/cat",(req,res)=>{
    Course.aggregate().group({ _id: '$institute', count: { $sum: 1 } })
        .then(data =>{
            if (!data){
                res.status(404).send({ message: "Not found Tutorial with id " });
            }else{
               // console.log(data[0])
                res.json(data);
            }
        })
        .catch(err=>{
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" +err });
        })


});

router.get("/category",(req,res)=>{
    Course.aggregate().group({ _id: '$category', count: { $sum: 1 } })
        .then(data =>{
            if (!data){
                res.status(404).send({ message: "Not found Tutorial with id " });
            }else{
                // console.log(data[0])
                res.json(data);
            }
        })
        .catch(err=>{
            res
                .status(500)
                .send({ message: "Error retrieving Tutorial with id=" +err });
        })


});
router.get("/list",(req,res)=>{

    Course.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
            console.log(data)
        }
    })
});
router.get("/list/:id", async (req,res)=>{
    Course.findById(req.params.id,(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
});
router.post("/pass", async (req,res)=>{
    // res.send(req.query);
    // console.log(req.query)
    Course.find(req.query,(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)

        }
    })
});


router.post("/like", async (req,res)=>{
    req.query = 'Business'
    const word = req.query
    Course.find({category:/word/},(data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data);
        }
    })
});
module.exports = router;
