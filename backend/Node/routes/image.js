const router = require('express').Router();
const User = require('../model/User');
const Image = require('../model/Images');
const verify = require('./TokenVerification');
const multer = require('multer');
const {imageValidation} = require('../validation/validation')


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

router.post('/upload',upload.single('image'),verify,  async (req, res) => {
    const {error} = imageValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message);
    const image = new Image({
        // user_id:req.user._id,
        image:req.file.path
    });
    try {
        const savedImage = await image.save();
        res.json({savedImage})
    }catch (e) {
        res.status(400).send(e);
    }

});

module.exports = router;
