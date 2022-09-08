const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const db = mongoose.connection;
require('dotenv').config()

//// MIDDLEWEAR
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }))





/// LISTENING ////

app.listen(PORT, () => {
    console.log('listening on ', PORT, ' homie...');
  })