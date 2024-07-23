const mongoose = require('mongoose')

//models
const PlayerSchema = new mongoose.Schema({
    name: String,
    team: String,
    description: String
})

const Team = mongoose.model('Team', PlayerSchema )

module.exports = Team