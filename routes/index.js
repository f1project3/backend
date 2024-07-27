const router = require("express").Router();
const teamRoute = require("./teamRoutes"); //import the team routing js page
const driverRoute = require("./driverRoutes"); //import the driver routing js page

router.use("/teams", teamRoute);
router.use("/driver", driverRoute);

module.exports = router;
