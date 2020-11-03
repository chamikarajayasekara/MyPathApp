const router = require('express').Router();
const {categoryValidation} = require('../validation/validation')
const Category = require('../model/categories')
const verify = require('./TokenVerification')

router.post('/register', verify,async (req, res) => {

    // VALIDATE BEFORE SAVING A USER
    const {error} = categoryValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);

    const nameExist =await Category.findOne({name: req.body.name});
    if (nameExist) return res.status(400).send("Category already exist");

    const category = new Category({
        name:req.body.name,
    });
    try {
        const savedUser = await category.save();
        res.send(savedUser);
    }catch (e) {
        res.status(400).send(e);
    }

})
router.get('/details',verify,(req,res)=>{
    Category.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    })
})
router.get('/list',(req,res)=>{
    Category.find((data,err)=>{
        if (err) {
            return res.json(err)
        }else {
            res.json(data)
        }
    }).sort({'name': 1})
})

router.put("/update/:_id", verify, async (req, res, next) => {
    Category.findByIdAndUpdate(req.params._id, req.body, (err, user) => {
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
    Category.findByIdAndRemove(req.params._id,(err)=>{
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
