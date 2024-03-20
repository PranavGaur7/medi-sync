const express = require("express")
const router = express()

const { appointment } = require("../Controllers/appointmentConroller");

router.post("/appointments", appointment);

module.exports = router;