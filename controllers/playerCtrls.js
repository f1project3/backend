const db = require('../models') 
const getPlayer = (req, res) => {
    res.send('getPeople')
}

const createPlayer = (req, res) => {
   
    res.send('createPeople')
}

module.exports = {
    getPlayer, 
    createPlayer
}