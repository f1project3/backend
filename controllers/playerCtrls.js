const db = require('../models') 
const getPlayer = (req, res) => {
    res.send('getPlayer')
}

const createPlayer = (req, res) => {
   
    res.send('createPlayer')
}

module.exports = {
    getPlayer, 
    createPlayer
}