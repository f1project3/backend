const db = require('../models') //this is where our db mongoose connection lives as well as our models

const getStats = (req, res) => {
    // db.People.find({})  <-- db has all our models in it so we can use any of them here with one line! 
    res.send('getPeople')
}

const createStats = (req, res) => {
    // db.People.create({name: 'testing'})
    // .then((res) => {console.log(res)})
    res.send('createPeople')
}

module.exports = {
    getStats, 
    createStats
}