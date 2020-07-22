const express = require('express');
const app = express();
const mongoose = require('mongoose')
let cors = require('cors')
let bodyparser = require('body-parser')
let dbConfig = require('./database/database')


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
    }).then(()=> {
    console.log("Database connected successfully")
    },
    error =>{
        console.log("Couldn't connected to the database"+error)
})

app.get('/',(req,res)=>{
    res.send("hello world  this is my first server")
})

const port = process.env.PORT || 5000;
const server = app.listen(port,()=>{
    console.log("app run in port "+port)
});

