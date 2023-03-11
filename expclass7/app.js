const { urlencoded, json } = require("express")
const express=require("express")
const mongoose=require("mongoose")
const app=express()
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.urlencoded({extended: false}))
const nameSchema = new mongoose.Schema({
    firstName: String,
    lastNameName: String
   });
var User = mongoose.model("User", nameSchema);
const connetdb= async()=>{
    try{
       await mongoose.connect('mongodb://127.0.0.1:27017/user')
       console.log("db is connected")
    }
    catch(error){
      console.log("db is not connected")
      console.log(error.message)
      process.exit(1)
    }
}


app.post("/addname",async (req,res)=>{
try{
    const name=req.body.firstName;
    const last=req.body.lastName;
  const newuser=new User({
    firstName: name,
    lastNameName:last
  })
await newuser.save()
res.sendFile(__dirname + "/seve.html")
}catch(error){
res.status(500).send(error)
}
})
app.get("/addname",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
})
module.exports={app,connetdb}