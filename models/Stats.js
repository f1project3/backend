const mongoose = require('mongoose')

//models
const StatsSchema = new mongoose.Schema({
    titles: Number,
    wins: Number,
    fastestLaps: Number
})

const Stats = mongoose.model('Stats', StatsSchema )

module.exports = Stats