const mongoose = require('mongoose')
const User = require("../model/User")

const ObjectId = mongoose.Schema.Types.ObjectId;
const instituteSchemas = mongoose.Schema({
    user_id :ObjectId,
    name:{
        type:String,
        require:true,
        unique: true
    },
    location:{
        type: String,
    },
    image:{
        type:String,
    },
    created_date: {
        type: Date, default: Date.now
    },
});
const institute = (module.exports = mongoose.model("Institute",instituteSchemas));

// module.exports.getInstituteRequestById = function (id,callback) {
//     User.findById(id, callback)
// };
