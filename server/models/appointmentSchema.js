const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    disease: {
        type: String,
        required: true,
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
    },
    time: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
