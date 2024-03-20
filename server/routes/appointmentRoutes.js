const express = require("express")
const router = express()

const { appointment } = require("../Controllers/appointmentConroller");

router.post("/appointment", appointment);

module.exports = router;