const express=require("express")
const mongoose=require("mongoose")
const app=express();
app.use(express.json())
// app.use(express.urlencoded({extended: true}))
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    passoward:String
})
const userModel= mongoose.model("user", userschema);
const conectDb= async()=>{
    try{
     await mongoose.connect('mongodb://127.0.0.1:27017/userd');
      console.log("db is conneted")
    
    }
    catch(error){
    console.log("db is not connected")
    console.log(error.message)
        process.exit(1)
    }
}
app.post("/", async(req,res)=>{
    try{
    const name=req.body.name;
    const eamil=req.body.email;
    const passoward=req.body.passoward;
    const newuser=new userModel({
      name:name,
      email:eamil,
      passoward:passoward
    })
    const userData = await newuser.save()
    res.status(202).send({userData})
    }catch(error){
      console.log(error)
    }
  
  })
  app.get("/",async (req,res)=>{
    const user= await userModel.find();
     res.send(user)
})
module.exports={app,conectDb};