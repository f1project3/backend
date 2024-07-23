const db = require('../models') // where mongoose connection and models lives

const getTeam = (req, res) => {
    db.Team.find({})
    .then((foundTeam) => {
        if(!foundTeam){
            res.status(404).json({message: 'Cannot find People'})
        } else {
            res.status(200).json({data: foundTeam})
        }
    }) 
}

const createTeam = (req, res) => {
    db.Team.create(req.body)
    .then((createdTeam) => {
        if(!createdTeam){
            res.status(400).json({message: 'Cannot create Team'}) 
        } else {
            res.status(201).json({data: createdTeam, message: 'Team created'})
        }
    })
}

module.exports = {
    getTeam, 
    createTeam
}

