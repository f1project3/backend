const db = require('../models') // where mongoose connection and models lives

const getTeam = (req, res) => {
    res.send('getTeam')
}

const createTeam = (req, res) => {
    res.send('createTeam')
}

module.exports = {
    getTeam, 
    createTeam
}

