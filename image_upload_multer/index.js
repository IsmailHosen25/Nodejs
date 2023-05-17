const app=require("./app")
const port=3004
app.listen(port,()=>{
    console.log(`your server is running at http://localhost:${port}`)
})