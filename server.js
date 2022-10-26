const express           = require('express');
const dotenv            = require('dotenv');
const { urlencoded }    = require('express');
const studentRouter     = require('./routes/studentRoutes');
const expressLayout     = require('express-ejs-layouts');
const mongoConnect      = require('./config/db');

//configure dotenv
dotenv.config();
const port = process.env.PORT || 8080

//init express
const app = express();

//get form data 
app.use(express.json());
app.use(urlencoded({extended:false}));

//ejs template engine
app.set('view engine', 'ejs');
app.use(expressLayout)
app.set('layout', 'layouts/app.ejs')

//static folder
app.use(express.static('public'));

//router
app.use(studentRouter);


//server listener
app.listen(port,()=>{
    mongoConnect()
    console.log(`Server is running on port ${port}`);
})


