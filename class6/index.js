const http=require("http");
const fs=require("fs")
const port=3000;
const hostName="127.0.0.1"

// function hendelreadfile(filepath,statuscode){
//     fs.readFile(filepath,(err,data)=>{
//         res.writeHead(statuscode,{"content-type":"text/html"})
//         res.write(data)
//         res.end
//     })
// }
const server=http.createServer((req,res)=>{
  if(req.url==="/"){
    fs.readFile("./htmlfile/index.html",(err,data)=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
        res.end
    })
    // hendelreadfile("./htmlfile/index.html",200)
  }
  else if(req.url==="/about"){
    fs.readFile("./htmlfile/about.html",(err,data)=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
        res.end
    })
    // hendelreadfile("./htmlfile/about.html",200)
  }
 else if(req.url==="/sercivce"){
    fs.readFile("./htmlfile/service.html",(err,data)=>{
        res.writeHead(200,{"content-type":"text/html"})
        res.write(data)
        res.end
    })
    // hendelreadfile("./htmlfile/service.html",200)
  }
  else{
    res.end("<h1>404</h1>")
  }
})
server.listen(port,hostName,()=>{
  console.log(`server is running at http://${hostName}:${port}`)
})