const db = require('../models') 
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
    }))}

module.exports = {
    getPlayer, 
    createPlayer
}