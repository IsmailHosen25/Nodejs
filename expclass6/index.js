const app=require("./app");
port=4000;
app.listen(port,()=>{
    console.log(`your servar is running at http://localhost:${port}`)
})