const express=require("express")
const {getuser,postuser,deltuser,updtuser}=require("../controler/user.cont")
const router=express.Router()
router.get("/all", getuser )
router.post ("/all", postuser)
router.delete("/all/:id",deltuser)
router.put("/all/:id",updtuser)
module.exports=router