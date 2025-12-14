// Web server for nevans-tech
// v1.0.0 - 12/14/2025
// nevans13

// Import Node modules
const dotenv = require("dotenv").config();
const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

// Build Express app
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("common"));
app.use(helmet());

// Use static files
app.use(express.static(__dirname + "/public"));

// Start the app
const port = process.env.PORT || 8910;
app.listen(port, () => {console.log(`App listening on port ${port}`);});