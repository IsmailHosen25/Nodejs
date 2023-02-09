const express=require("express")
const app=express();
app.get("/",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/htmlfile/index.html")
})
app.get("/about",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/htmlfile/about.html")
})
app.get("/sercivce",(req,res)=>{
    res.statusCode=200;
    res.sendFile(__dirname+"/htmlfile/service.html")
})
module.exports=app;