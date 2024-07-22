const router = require("express").Router()
const teamRoute = require("./teamRoutes")//import the people routing js page
const playerRoute = require("./playerRoutes")//import the people routing js page
const statsRoute = require("./statsRoutes")//import the people routing js page

router.use('/team', teamRoute) //any url beginning in /people will be directed to ./peopleRoutes and then use the request's HTTP method sent
router.use('/players', playerRoute) //any url beginning in /people will be directed to ./peopleRoutes and then use the request's HTTP method sent
router.use('/stats', statsRoute) //any url beginning in /people will be directed to ./peopleRoutes and then use the request's HTTP method sent


module.exports = router
