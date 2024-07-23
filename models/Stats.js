const mongoose = require('mongoose')

//models
const StatsSchema = new mongoose.Schema({
    player: String,
    titles: Number,
    wins: Number,
    fastestLaps: String
})

const Stats = mongoose.model('Stats', StatsSchema )

module.exports = Stats