const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    techs:{
        type:[String],
        required:true,
    },
    github:{
        type:String,
        required:true,
    },
    onlineLink:{
        type: String,
        required:true,
    }
});

const model = mongoose.models.Project || mongoose.model("Project" , schema);
module.exports = model;