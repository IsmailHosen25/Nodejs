const express=require("express");
const app=express();
const userouter=require("./routes/user.route")
app.use("/api/user", userouter)
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/file/index.html")

    //  res.cookie("name","hasan");
    //  res.cookie("age","21");
    //  res.clearCookie("name")
    //  res.clearCookie("age")


    // res.append("id","2111450")
    //  res.end()


    // res.statusCode=200;


    // res.status(200).json({
    //     "name":"Hasan",
    //     "age":"21",
    //     "statuscode":200
    // })


    // res.redirect("/api/user/login");
})
/* 
     Response
    
     *Body can contain data as html, text,json etc
     *Cookies
     *Headers
     *status code


*/


module.exports=app;