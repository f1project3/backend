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
const updateStats = (req,res) => {
    db.Stats.findByIdAndUpdate(req.params.id, req.body, {new: true}). then((updatedStats => {
        if(!updatedStats){
            res.status(400).json({Message: 'Could not update Stats'})

        }else {
            res.status(200).json({Data: updatedStats, Message: "Stats updated"})

        }
    }))
}

const deleteStats = (req,res) => {
    db.Stats.findByIdAndDelete(req.params.id)
    .then((deletedStats => {
        if(!deletedStats){
            res.status(400).json({Message: 'Could not delete Stats'})

        } else {
            res.status(200).json({Data: deletedStats, Message: "Stats deleted"})   
        }
    }))
}
module.exports = {
    getStats, 
    createStats,
    updateStats,
    deleteStats
}