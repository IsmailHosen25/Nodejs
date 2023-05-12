const express=require("express")
const {getuser,postuser,deltuser,updtuser,postlogin}=require("../controler/user.cont")
const router=express.Router()
router.get("/all", getuser )
router.post ("/all", postuser)
router.post ("/all/login", postlogin)
router.delete("/all/:email",deltuser)
router.put("/all/:email",updtuser)
module.exports=router