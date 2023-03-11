const express=require("express")
const app=express();
const mongoose=require("mongoose")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const productSchema=new mongoose.Schema({
  title:String,
  price:Number,
  code:String,
})
const productModel= mongoose.model("product", productSchema)
const conectDb= async()=>{
try{
 await mongoose.connect('mongodb://127.0.0.1:27017/product');
  console.log("db is conneted")

}
catch(error){
console.log("db is not connected")
console.log(error.message)
    process.exit(1)
}
}
app.post("/", async(req,res)=>{
  try{
  const title=req.body.title;
  const price=req.body.price;
  const code=req.body.code;
  const newproduct=new productModel({
    title:title,
    price:price,
    code:code
  })
  const productData= await newproduct.save()
  res.status(202).send({productData})
  }catch(error){
    console.log(error)
  }

})
app.get("/:id",async (req,res)=>{
  const id=req.params.id
  const products=await productModel.findOne({_id:id}).select({
    code:1
  })
  res.send(products)
})
module.exports={app,conectDb};