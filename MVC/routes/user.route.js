const express=require("express")
const router=express.Router();

const {userget,userpush} = require("../controller/user.cont");
router.use(express.urlencoded({extended: true}))

router.get("/login",userget)
router.post("/login",userpush)
router.get("/",(req,res)=>{
    res.send("MVC test")
})
module.exports=router