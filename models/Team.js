const mongoose = require('mongoose')

//models
const TeamSchema = new mongoose.Schema({
    name: String,
    logo: String,
    history: String
})

const Team = mongoose.model('Team', TeamSchema )

module.exports = Team