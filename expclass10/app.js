const express=require('express')
const app=express()
const cors=require("cors")
app.use(cors())
const user=require("./routes/user.route")
const mongoose=require("mongoose")
app.use(express.json())
const connectDb= async ()=>{
   try{
      await mongoose.connect('mongodb://127.0.0.1:27017/user');
      console.log("DB is connected")
   }catch(error){
       console.log("Db is not connected")
       console.log(error)
       process.exit(1)
   }
}


app.use("/user", user)

module.exports={app,connectDb}