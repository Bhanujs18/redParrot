const express = require('express');
const app = express();
const db = require('./db/db')
const orderRoute = require('./routes/order')
const cors = require('cors')
app.use(cors());

app.use(express.json());

db().then(()=>console.log("Connect to db")).catch((err)=>console.log(err))

app.get("/" , (req , res)=>{
   res.send("app is runnig")
})

app.use("/api/v1/order" , orderRoute);


app.listen(3000 , ()=>{
    console.log("listing at 3000")
})