const express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
/*
Request Methode
*Http request throw -get,post ,put,delete
*Request with route parameters - req.params.parameterName
*Request with Query parameters - req.query.parameterName
*Request with header - req.header("key")
*Request with json data?form data inside body - req.body.parameterName
*/

// **********************Query parameters
// app.get("/",(req,res)=>{
    // const id=req.query.id
    // const name=req.query.name
    // const {id,name}=req.query
    // res.send(`my name is ${name}, Id is ${id}`)
// })


// **********************route parameters
app.get("/username/:name/userid/:id",(req,res)=>{
    const id=req.params.id;
    const name=req.params.name;
     res.send(`my name is ${name}, Id is ${id}`)
})


// **********************header 
// app.get("/",(req,res)=>{
//     const id=req.header("id");
//     const name=req.header("name")
//     res.send(`my name is ${name}, Id is ${id}`)
// })

// **********************json data
// app.post("/about",(req,res)=>{
//         const name=req.body.name;
//         const id=req.body.id
//         res.send(`My name is ${name}, my student id is ${id}`)
    
//     })

app.get("/about",(req,res)=>{
    res.sendFile("about page")
})

module.exports=app;