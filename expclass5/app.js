const express=require("express");
const app=express();
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get("/register",(req,res)=>{
    res.sendFile(__dirname + "/ragistation.html")
})
app.post("/register", (req,res)=>{
    const fullName=req.body.fullName;
    const age=req.body.age;
    res.send(`My name is ${fullName}, My age is ${age}`)
})
module.exports=app;