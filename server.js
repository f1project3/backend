// Dependencies

require('dotenv').config()
const { PORT } = process.env
const express = require('express')
const app = express()
const routes = require('./routes/index')

//routes
app.use('/', routes) 
app.use((req, res) => {res.status(404).json({message: "NOT A PROPER ROUTE"})})

//listener
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))
