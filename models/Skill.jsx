const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    img:{
        type: String,
        required:true,
    }
})

const model = mongoose.models.Skill || mongoose.model("Skill" , schema);

module.exports = model;