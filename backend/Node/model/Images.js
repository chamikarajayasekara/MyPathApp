const mongoose = require('mongoose')
const User = require('../model/User');


const ObjectId = mongoose.Schema.Types.ObjectId;

const imageSchema = mongoose.Schema({
    user_id: ObjectId,
    image:{
        type: String,
    },
    imageUrl: String

});


const images = (module.exports = mongoose.model("Images", imageSchema));
