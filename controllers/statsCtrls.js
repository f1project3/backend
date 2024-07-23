const db = require('../models') 

const getStats = (req, res) => {
    db.Stats.find({})
    .then((foundStats => {
        if(!foundStats){
            res.status(404).json({message: 'Cannot find Stats'})
        } else {
            res.status(200).json({data: foundStats})  
        }
    }))
}

const createStats = (req, res) => {
    db.Stats.create(req.body)
    .then((createdStats => {
        if(!createdStats){
            res.status(404).json({message: 'Cannot find Stats'})
        } else {
            res.status(200).json({data: createdStats})  
        }
    }))
}

module.exports = {
    getStats, 
    createStats
}