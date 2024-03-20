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
                return value.length >= 6;
            },
            message:"Password must be of length 6",
        }
    },
    gender:{
        type:String,
        default:"male"
    },
    weight:{
        type:Number,
        default: null, 
    },
    phone:{
        type:Number,
        default: null, 
    },
    bloodgroup:{
        type:String,
        default: null, // Default value for bloodgroup
        
    },
    age:{
        type:Number,
        default: null,
    },
    experience:{
        type:Number,
        default:null,
    },
    department:{
        type:String,
        default:null,
        enum:["Cardio", "Neuro", "Orthopadics", "ENT", "Pediatries" ,"Sexologist", "Physciatrist", "Dermatology" ],
    },
    role:{
        type:String,
        enum:["Doctor", "Patient"],
        default: "Patient" // Default value for role
    }
});

module.exports = mongoose.model("User", userSchema); // Changed model name to "User"
