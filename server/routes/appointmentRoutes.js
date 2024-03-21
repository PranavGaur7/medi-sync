const express = require("express")
const router = express.Router()

const { appointment, getDoctor } = require("../Controllers/appointmentConroller");

router.post("/appointments", appointment);
router.get("/doctorList", getDoctor);


module.exports = router;