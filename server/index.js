const express = require('express');
const app = express();
const db = require('./db/db')

db().then(()=>console.log("Connect to db")).catch((err)=>console.log(err))

app.get("/" , (req , res)=>{
   res.send("app is runnig")
})

app.listen(3000 , ()=>{
    console.log("listing at 3000")
})