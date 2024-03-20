const express = require('express')
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cookieParser())
var cors = require('cors')
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}))
const server = app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})