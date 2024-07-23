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

const updateTeam = (req,res) => {
    db.Team.findByIdAndUpdate(req.params.id, req.body, {new: true}). then((updatedTeam => {
        if(!updatedTeam){
            res.status(400).json({Message: 'Could not update Team'})

        }else {
            res.status(200).json({Data: updatedTeam, Message: "Team updated"})

        }
    }))
}

const deleteTeam = (req,res) => {
    db.Team.findByIdAndDelete(req.params.id)
    .then((deletedTeam => {
        if(!deletedTeam){
            res.status(400).json({Message: 'Could not delete Team'})

        } else {
            res.status(200).json({Data: deletedTeam, Message: "Team deleted"})   
        }
    }))
}
module.exports = {
    getTeam, 
    createTeam,
    updateTeam,
    deleteTeam
}

