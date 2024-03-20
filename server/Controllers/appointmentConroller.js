const Appointment = require("../models/appointmentSchema");
const User = require("../models/userSchema");
require("dotenv").config();

exports.appointment = async (req,res) => {
    try{

        const { name, disease, doctorId, time } = req.body;

        // Check if the doctor exists
        const doctor = await User.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        // Create the appointment
        const appointment = new Appointment({
            name,
            disease,
            doctor: doctor._id, // Associate the appointment with the doctor
            time
        });
        await appointment.save();

        res.status(201).json({ message: "Appointment created successfully!", data: appointment });
    } catch (err) {
        console.error(err);
        if (err.code === 11000) return res.status(409).json({ message: "Duplicate appointment" });
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

