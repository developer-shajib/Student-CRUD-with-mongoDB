
const mongoose = require('mongoose');

//create schema
const studentSchema = mongoose.Schema({
    name : String,
    email : String,
    cell : String,
    gender : String,
    location : String,
    photo : String
},{
    timestamps : true
})

//export collection
module.exports = mongoose.model('Student',studentSchema)