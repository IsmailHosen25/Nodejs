const express=require("express");
const app=express();
const router=require("./routes/user.route");
app.use(router)

app.use((req,res)=>{
    res.send("404")
})
module.exports=app