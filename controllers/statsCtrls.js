const db = require('../models') 

const getStats = (req, res) => {
   
    res.send('getPeople')
}

const createStats = (req, res) => {

    res.send('createPeople')
}

module.exports = {
    getStats, 
    createStats
}