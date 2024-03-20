const Appointment = require("../models/appointmentSchema");
const User = require("../models/userSchema"); // Assuming you have a Doctor model
require("dotenv").config();

exports.appointment = async (req, res) => {
    try {
        const { name, disease, doctorName, time } = req.body;

        // Check if the doctor exists
        const doctor = await User.findOne({ name: doctorName });
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        // Create the appointment
        const appointmentData = await Appointment.create({
            name,
            disease,
            doctor: doctor._id, // Associate the appointment with the doctor
            time
        });

        res.status(201).json({ message: "Appointment created successfully!", data: appointmentData });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) return res.status(409).json({ message: "Conflict error" }); // Duplicate appointment
        else return res.status(500).json({ message: 'Internal Server Error' });
    }
}
