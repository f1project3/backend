const db = require('../models') 

const getStats = (req, res) => {
   
    res.send('getStats')
}

const createStats = (req, res) => {

    res.send('createStats')
}

module.exports = {
    getStats, 
    createStats
}