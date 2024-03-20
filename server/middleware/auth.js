const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
        // Extract JWT token
        const token = req.body.token;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token Missing',
            });
        }

        // Verify the token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Something went wrong while verifying the token',
        });
    }
}

exports.isStudent = (req, res, next) => {
    try {
        if (req.user.role !== "Doctor") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for doctors',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User Role is not matching',
        })
    }
}

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== "Patient") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for patients',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User Role is not matching',
        })
    }
}
