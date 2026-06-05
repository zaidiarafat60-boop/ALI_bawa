const express = require('express');

const app = express();
const connection = require('./dbConnect')
const port = 4000;


app.get('/',(req,res)=>{
    res.send("Arafat zaidi")
})
app.get('/user',(req,res)=>{
    let quiry = "select * from user";
    connection.query(quiry , function (error, result){
        if(error){
            console.log("error",error.message);
        }
        else{
            res.send(result);
        }
    })
})


app.listen(port,()=>{
    console.log(`server is running on the ${port}`);
})

