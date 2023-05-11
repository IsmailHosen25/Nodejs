const {app, connectDb}=require("./app")
const port=3010;
app.listen(port,async ()=>{
    console.log(`Your server is running at http://localhost:${port}`)
    await connectDb();
})