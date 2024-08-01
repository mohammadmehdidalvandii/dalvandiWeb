const mongoose = require("mongoose");

const schema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
        },
        email:{
            type: String,
            required:true,
        },
        request:{
            type: String,
            required:true
        }
    }
);

const model = mongoose.models.Messages || mongoose.model("Messages" , schema);

module.exports = model