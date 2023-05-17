const express=require("express")
const cors=require("cors")
const multer=require("multer")
const path=require("path")
const { error } = require("console")
const app=express()
app.use(cors())
const image="./uplode"
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, image)
    },
    filename:(req,file,cb)=>{
        const fileExt=path.extname(file.originalname)
        const filename=file.originalname
                                      .replace(fileExt, "")
                                      .toLowerCase()
                                      .split(" ")
                                      .join("-")+"-"+ Date.now();
        cb(null, filename+fileExt)                               
    }
})
var upload=multer({
    storage:storage,
    limits:{
        fileSize:1000000 // 1MB //
    },
    fileFilter:(req,file,cb)=>{
        if(file.mimetype=== "image/jpg"|| file.mimetype==="image/png" || file.mimetype==="image/jpeg"){
            cb(null,true)
        }else{
            cb(new Error("only jpg,png,jpeg is allowed"))
        }
    }
  })
app.get("/",(req,res)=>{
    res.send("hello")
})
app.post("/", upload.single("avatar"),(req,res)=>{
  const image=req.file.path
  res.send(image)
  console.log(image)
})
module.exports=app

