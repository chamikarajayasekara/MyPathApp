const mongoose = require('mongoose')
const categorySchema = mongoose.Schema({
    name:{
        type:String,
        maxlength:50
    },
    created_date: {
        type: Date, default: Date.now
    },
})

module.exports = mongoose.model("Category",categorySchema)
