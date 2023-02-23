const path=require('path')
const users=require("../Models/uder.data");
const userget=(req,res)=>{
        res.sendFile(path.join(__dirname +"/../views/index.html"))
    }
const userpush=(req,res)=>{
    const name=req.body.fullName
    const age=req.body.age
    const user={
        name,
        age
    }
    users.push(user)
    res.status(200).json({
        success:true,
        users,
    })
}
module.exports={userget,userpush}
