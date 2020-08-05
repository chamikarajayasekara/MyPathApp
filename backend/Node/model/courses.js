const mongoose = require('mongoose')
const User = require('../model/User');


const ObjectId = mongoose.Schema.Types.ObjectId;

const courseSchema = mongoose.Schema({
    user_id: ObjectId,
    institute:{
      type:String,
    },
    name:{
        type:String,
    },
    category:{
        type:String,
    },
    level:{
        type:String,
    },
    description:{
        type:String,
    },
    duration:{
        type:String,
    },
    cost:{
        type:String,
    },
    payments:{
        type:String,
    },
    scholarships:{
        type:String,
    },
    qualifications:{
        type:String,
    },
    content:{
        type:String,
    },
    enrollments:{
        type:String,
    },
    contacts:{
        type:String,
    },
    further:{
        type:String,
    },
    career:{
        type:String,
    },
    created_date: {
        type: Date, default: Date.now
    },

});

const courses = (module.exports = mongoose.model("Courses",courseSchema));
