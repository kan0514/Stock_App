import "dotenv/config";
import express from "express"

const app = express()
const port = process.env.PORT || 3000


app.listen(port,()=>{
     console.log("Server stared at port number "+ port)
})