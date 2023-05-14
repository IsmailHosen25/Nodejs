const {app,db} = require("./app")
const port=3000;
app.listen(port,async()=>{
    console.log(`your server is running at http://localhost:${port}`)
    await db ()
})
