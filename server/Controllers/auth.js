const bcrypt = require("bcrypt");
const User = require("../models/userSchema");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
    try {
        const userData = req.body;
        // Check if user already exists
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash the password with 10 rounds of salt
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        // Create new user
        const userCreates = await User.create({
            ...userData,
            password: hashedPassword
        });
        console.log(userCreates);
        return res.status(200).json({
            success: true,
            message: "User created successfully"
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "User cannot be registered, please try again later"
        });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation on email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all the details carefully"
            });
        }

        // Check for registered user
        const foundUser = await User.findOne({ email });

        // If user not found
        if (!foundUser) {
            return res.status(401).json({
                success: false,
                message: "User is not registered"
            });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, foundUser.password);

        if (isPasswordValid) {
            // Passwords match
            const token = jwt.sign(
                { email: foundUser.email, id: foundUser._id, role: foundUser.role },
                process.env.JWT_SECRET,
                { expiresIn: "2h" }
            );

            return res.status(200).json({
                success: true,
                token,
                message: "User logged in successfully"
            });
        } else {
            return res.status(403).json({
                success: false,
                message: "Password incorrect"
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Login failure"
        });
    }
};

exports.getDoctor = async(req,res) => {
    try{
        let doctor = await User.findById({user: uid});
        if(doctor){
            res.json(doctor);
        }
        else{
            res.statu(400).json({
                success:false,
                message:"user not found",
            })  
        }
    }
    catch(error){
        res.json(error);
    }
}