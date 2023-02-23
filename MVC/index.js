const app=require("./app");
port=3000;
app.listen(port,()=>{
    console.log(`surver is running at http://localhost:${port}`)
})