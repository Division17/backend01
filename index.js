require('dotenv').config()
const express = require('express')
const app = express();

app.get("/",(req, res)=>{
     res.send("Hello World");
})

app.get("/login",(req, res)=>{
    res.send(`<h1>Please Login</h1>`)
})

app.get("/register", (req, res)=>{
   res.send(`<h2>Please Register</h2>`)
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listen on port ${process.env.PORT}`);
})
