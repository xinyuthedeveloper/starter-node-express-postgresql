const express = require('express')

const app = require("./app");
const router = express.Router();
const PORT = process.env.PORT || 5000;


const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
