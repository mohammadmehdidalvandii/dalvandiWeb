const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    favorite:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    linkInstagram:{
        type:String,
        required:true,
    },
    linkGithub:{
        type:String,
        required:true,
    },
    linkTelegram:{
        type:String,
        required:true,
    },
    linkDin:{
        type:String,
        required:true,
    },
});

const model = mongoose.models.Avatar || mongoose.model("Avatar" , schema);
module.exports = model;