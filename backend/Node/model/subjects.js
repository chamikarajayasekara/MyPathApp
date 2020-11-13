const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId;

const subjectSchema = mongoose.Schema({
    user_id: ObjectId,
    name:{
        type:String,
    },
    arts:{
        type:String,
    },
    commerce:{
        type:String,
    },
    bio:{
        type:String,
    },
    physical:{
        type:String,
    },
    etec:{
        type:String,
    },
    btec:{
        type:String,
    },
    created_date: {
        type: Date, default: Date.now
    },

});

const subject = (module.exports = mongoose.model("Subject",subjectSchema));
