const router = require("express").Router()
const teamRoute = require("./teamRoutes")//import the team routing js page
const playerRoute = require("./playerRoutes")//import the player routing js page
const statsRoute = require("./statsRoutes")//import the stats routing js page

router.use('/team', teamRoute) 
router.use('/players', playerRoute) 
router.use('/stats', statsRoute) 


module.exports = router
