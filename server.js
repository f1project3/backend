// Dependencies

require('dotenv').config()
const { PORT } = process.env
const express = require('express')
const app = express()
const routes = require('./routes/index')

//routes
app.use('/', routes) //check the routes index.js for ALL routes so we save space on server.js

//listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
