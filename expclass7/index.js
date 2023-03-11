const {app,connetdb}=require("./app")
const port=3001;
app.listen(port, async ()=>{
    console.log(`server is running at http://localhost:${port}`);
    await connetdb();
})