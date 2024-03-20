const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    experience:{
        type:Number,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        enum:["Doctor", "Patient"]
    }
});

module.exports = mongoose.model("/doctors", doctorSchema);