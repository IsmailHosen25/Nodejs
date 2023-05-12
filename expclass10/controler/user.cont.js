const usermodel= require("../models/user.schema")
const getuser=async (req,res)=>{
        try{
           const users=await usermodel.find().sort({
            number:1
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
const deltuser = async (req,res)=>{
        const email = req.params.email
        try{
            const finduser= await usermodel.findOne({email:email})
          
            const userdelt= await usermodel.findByIdAndDelete({_id:finduser.id})
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
            message:error
           })
        }
}
const updtuser=async (req,res)=>{
    try{
        const email=req.params.email
        const finduser=await usermodel.findOne({email:email})
        const name=req.body.name
        const number=req.body.number
        const updtuser= await usermodel.findByIdAndUpdate(
            {_id:finduser.id},
            {
            $set:{
                name:name,
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
const postlogin=async (req,res)=>{
    const email=req.body.email
    const password=req.body.password
try{
    const user=await usermodel.findOne({$and:[{email:email},{password:password}]})
    if(user){
        res.status(200).send(user)
    }
    else{
        res.json("not exist")
    }
}
catch(error){
      res.send({
        message:"there is some error"
      })
}
}
module.exports={getuser,postuser,deltuser,updtuser,postlogin}