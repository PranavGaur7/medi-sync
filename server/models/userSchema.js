const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
        validate:{
            validator: function(value){
                return value.length>=6;
            },
            message:"Password must be of length 6",
        }
    },
    gender:{
        type:String,
        required:true,
    },
    weight:{
        type:Number,
        required: function(){
            return this.role !=="Doctor";
        },
    },
    phone:{
        type:Number,
        required: function(){
            return this.role !=="Doctor";
        },
    },
    bloodgroup:{
        type:String,
        required: function(){
            return this.role !=="Doctor";
        },
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
        enum:["Cardio", "Neuro", "Orthopadics", "ENT", "Pediatries" ,"Sexologist", "Physciatrist", "Dermatology" ],
    },
    role:{
        type:String,
        enum:["Doctor", "Patient"],
    }
});

module.exports = mongoose.model("user", userSchema);