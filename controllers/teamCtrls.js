const db = require('../models') 





const getTeam = (req, res) => {
    res.send('getPeople')
}

const createTeam = (req, res) => {

    res.send('createPeople')
}

module.exports = {
    getTeam, 
    createTeam
}