const express = require('express');
const app = express();
const cors = require('cors');
const { login, signup } = require('./Controllers/auth');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

require('./config/userDatabase').connect();


app.use(express.json());

// Use CORS middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}))

const authRoutes = require("./routes/auth");
const appointRoutes = require("./routes/appointmentRoutes");
app.use("/medisync", authRoutes);
app.use("/appointment", appointRoutes);


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})