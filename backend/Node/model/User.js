const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    email:{
        type:String,
        trim:true,
        unique:1
    },
    password:{
        type:String,
        minlength:5
    },
    created_date: {
        type: Date, default: Date.now
    },
})

module.exports = mongoose.model("User",userSchema)
