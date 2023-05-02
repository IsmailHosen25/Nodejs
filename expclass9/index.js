const {app,conectDb}=require("./app");
const port =8000;
app.listen(port, async ()=>{
    console.log(`your server is running at http://localhost:${port}`)
    await conectDb();
})