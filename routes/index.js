const router = require("express").Router()
const teamRoute = require("./teamRoutes")
const playerRoute = require("./playerRoutes")
const statsRoute = require("./statsRoutes")

router.use('/team', teamRoute) 
router.use('/players', playerRoute) 
router.use('/stats', statsRoute) 


module.exports = router
