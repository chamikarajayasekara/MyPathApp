const express = require('express');
const app = express();
const mongoose = require('mongoose');
let cors = require('cors');
let bodyparser = require('body-parser');
let cookieParser = require('cookie-parser');
let dbConfig = require('./database/database');
const fileUpload = require('express-fileupload');
const dotenv = require("dotenv");
dotenv.config();

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
    }).then(()=> {
    console.log("Database connected successfully")
    },
    error =>{
        console.log("Couldn't connected to the database"+error)
})


app.use(cors())
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(cookieParser())

//define the users routing
// app.use('/api/users/', require('./routes/users'))
app.use('/api/auth/',require('./routes/auth'));
app.use('/api/institute/',require('./routes/Institute'));
app.use('/api/courses/',require('./routes/course'));
app.use('/api/admin/',require('./routes/admin'));
app.use('/api/image/',require('./routes/image'));
app.use('/api/category/',require('./routes/category'));
app.use(fileUpload());
const port = process.env.PORT || 5000;
const server = app.listen(port,()=>{
    console.log("app run in port "+port)
});

