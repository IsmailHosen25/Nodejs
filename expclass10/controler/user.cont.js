const usermodel= require("../models/user.schema")
const getuser=async (req,res)=>{
        try{
           const users=await usermodel.find().sort({
            _id:1
           })
           if(users){
            res.status(200).send(users)
           }else{
            res.status(404).send({
                message:"users not found"
            })
           }
        }
        catch(error){
            res.status(505).send({
                message:"users not found"
            })
        }
    }
const postuser= async (req,res)=>{
    try{
        const name=req.body.name
        const email=req.body.email
        const number=req.body.number
        const password=req.body.password
        const newuser= new usermodel({
           name:name,
           email:email,
           number:number,
           password:password
        })
            const user= await newuser.save()
            res.status(200).send(user)
    }
    catch(error){
          res.send({
            message:"there is some error"
          })
    }
}
const deltuser= async (req,res)=>{
        try{
            const id = req.params.id
            const userdelt=await usermodel.findByIdAndDelete({_id:id})
            if(userdelt){
                res.status(200).send(userdelt)
            }
            else{
                res.status(200).send({
                    message:"you are not valid user"
                })
            }
            

        }catch(error){
           res.send({
            message:"there is some error"
           })
        }
}
const updtuser=async (req,res)=>{
    try{
        const id=req.params.id
        const number=req.body.number
        const updtuser= await usermodel.findByIdAndUpdate(
            {_id:id},
            {
            $set:{
                number:number
            }},
            {new:true})
        if(updtuser){
            res.status(200).send(updtuser)
        }
        else{
            res.status(200).send({
              message:"did not updated "
            })
        }
    }catch(error){
         res.status(505).send({
            message:"you are not valid user"
         })
    }

}
module.exports={getuser,postuser,deltuser,updtuser}