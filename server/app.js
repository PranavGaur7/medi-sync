const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 4000;

require('./config/doctorDatabase').connect();
require('./config/patientDatabase').connect();


app.use(express.json());

// Use CORS middleware
app.use(cors());


app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})