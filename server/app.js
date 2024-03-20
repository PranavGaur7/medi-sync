const express = require('express');
const app = express();
const cors = require('cors');
const { login, signup } = require('./Controllers/auth');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

require('./config/userDatabase').connect();


app.use(express.json());

// Use CORS middleware
app.use(cors());

const authRoutes = require("./routes/auth");
app.use("/medisync", authRoutes);



app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})