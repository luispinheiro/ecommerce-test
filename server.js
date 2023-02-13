// Packages
const compression = require("compression")
const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")

//Start
const app = express()

//Ambiente
const isProduction =process.env.NODE_ENV === "production"