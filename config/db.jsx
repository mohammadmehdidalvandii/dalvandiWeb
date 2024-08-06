const mongoose = require("mongoose");

const connectToDB = async ()=>{
    try{
        if(mongoose.connections[0].readyState){
            return true;
        }else{
            // await mongoose.connect("mongodb://localhost:27017/dalvandiweb");
            await mongoose.connect("mongodb://root:78SGxkKvoJfLCbeqsSlIoncS@table-mountain.liara.cloud:31799/my-app?authSource=admin");
            console.log("Connect To DB Successfully ✅")
        }
    } catch (err){
        console.log("DB Connection Has ERROR => " ,err);
    }
}

export default connectToDB;