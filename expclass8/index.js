const {app,conectDb}=require("./app")
const port=4000;
app.listen(port,async ()=>{
    console.log(`server is running at http://localhost:${port}`)
    await conectDb();
})