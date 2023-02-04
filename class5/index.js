const http = require('http');
const fs =require("fs")
const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync("./htmlfile/index.html");
const about=fs.readFileSync("./htmlfile/about.html");
const contect=fs.readFileSync("./htmlfile/contect.html");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.setHeader('Content-Type', 'text/html');
  if(req.url=="/"){
    res.end(home);
  }
  else if(req.url=="/about"){
    res.end(about);
  }
  else if(req.url=="/contect"){
    res.end(contect);
  }
  else{
    res.end("<h2>404</h2>")
  }
  
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});