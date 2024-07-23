const db = require('../models') 
const { off } = require('../models/Team')
const getPlayer = (req, res) => {
    db.Player.find({})
    .then((foundPlayer => {
        if(!foundPlayer){
            res.status(404).json({message: 'Cannot find Player'})
        } else {
            res.status(200).json({data: foundPlayer})  
        }
    }))
}

const createPlayer = (req, res) => {
   
    db.Player.create(req.body)
    .then((createdPlayer => {
        if(!createdPlayer){
            res.status(404).json({message: 'Cannot create Player'})
        } else {
            res.status(200).json({data: createdPlayer})  
        }
    }))
}

const updatedPlayer = (req,res) => {
    db.Player.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((updatedPlayer => {
        if(!updatedPlayer){
            res.status(404).json({message: 'Cannot create Player'})
        } else {
            res.status(200).json({data: updatedPlayer})  
        }
    }))
}

const deletedPlayer = (req,res) => {
   db.Player.findByIdAndDelete(req.params.id)
   .then((deletedPlayer => {
    if(!deletedPlayer){
        res.status(404).json({message: 'Cannot create Player'})
    } else{
        res.status(200).json({data: deletedPlayer})  

    }
   }))
}
module.exports = {
    getPlayer, 
    createPlayer,
    updatedPlayer,
    deletedPlayer
}