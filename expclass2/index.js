const express=require("express");
const fs=require("fs");
const port =3000;
const app=express();
const mymiddleware= (req,res,next)=>{
   console.log("middleware")
   req.curreime=new Date(Date.now());
   next();
}
app.get("/", mymiddleware ,(req,res)=>{
    res.send("Hello Hasan"+req.curreime)
    console.log("main "+req.currenttime)
})
app.listen(port,()=>{console.log(`server is running at http://localhost:${port}`)})