const mongoose=require("mongoose")
const userschema = new mongoose.Schema({
    name:{
       type:String,
       required: true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const usermodel=  mongoose.model("users", userschema)
module.exports=usermodel