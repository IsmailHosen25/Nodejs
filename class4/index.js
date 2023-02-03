const http =require("http")
const hostName="127.0.0.7";
const port=3000;


// http.createServer((req,res)=>{
//     res.end("this is my first server");
// }).listen(3000);



// const firstServer = http.createServer((req,res)=>{
//     res.end("this is my first server");
// });
// firstServer.listen(3000,()=>{
//     console.log("server host is running");
// })
const firstserver=http.createServer((req,res)=>{
    res.end("This is my first server , i am so happy");
})
firstserver.listen(port,hostName,()=>{
 console.log(`server is successfully running at http://${hostName}:${port}`);
})