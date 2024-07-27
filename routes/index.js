const router = require("express").Router();
const teamRoute = require("./teamRoutes"); //import the team routing js page
const playerRoute = require("./playerRoutes"); //import the player routing js page

router.use("/teams", teamRoute);
router.use("/players", playerRoute);

module.exports = router;
