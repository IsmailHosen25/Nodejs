const fs =require("fs");


// fs.watchFile('hello.txt',"This is hasan",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successful")
//     }
// })


// fs.appendFile('hello.txt',".My age is 21",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successful")
//     }
// })


// fs.readFile('hello.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


// fs.rename('hello.txt',"practice.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("successful")
//     }
// })


fs.unlink('practice.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("successful")
    }
})