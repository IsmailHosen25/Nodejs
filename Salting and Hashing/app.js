const express=require("express")
const app=express()
const mongoose=require("mongoose")
const bcrypt=require("bcrypt")
const saltRounds = 10;
app.use(express.json())
const db=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/hashing")
    console.log("db is connected")
}

const schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const hashingmodel= mongoose.model("hashings", schema)


app.post("/",async (req,res)=>{
     try{

        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {


            const data= new hashingmodel({ 
                name:req.body.name,
                email:req.body.email,
                password:hash})
      
        const user = await data.save()
         if(user){
            res.status(200).send(user)
         }
         else(
            res.status(202).send(user)
         )


        });

     }catch(e){
        res.status(404).send(e)
     }
})
app.post("/login",async (req,res)=>{
    try{
              const email=req.body.email
              const password= req.body.password
              const find= await hashingmodel.findOne({email:email})
              if(find){
              bcrypt.compare(password, find.password, function(err, result) {
                if(result===true){
                    res.status(200).send(find)
                       }
                   });
             }
             else{
                res.status(202).send("password wrong")
             }
        }
        catch(e){
       res.status(404).send(e)
      }
})


module.exports={app,db}