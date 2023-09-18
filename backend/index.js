const express = require('express');

const app = express();

app.get('/',(req,res,next)=>{
    res.send("backend is running");
})

app.listen(
    5000,
    ()=> console.log("backend is running")
)