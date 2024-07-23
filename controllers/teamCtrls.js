const db = require('../models') // where mongoose connection and models lives

const getTeam = (req, res) => {
    console.log('getTeam Function Working')
    res.send('getTeam')
}

const createTeam = (req, res) => {
    console.log('createTeam Function Working')
    res.send('createTeam')
}

module.exports = {
    getTeam, 
    createTeam
}

