const router = require("express").Router();
const { teamCtrl } = require("../controllers/index");

//Routes - Methods
router.get("/", teamCtrl.getTeam);
// router.get("/fantasy_team_drivers", teamCtrl.getFantasyTeamDrivers);
// router.post("/create_fantasy_team", teamCtrl.createFantasyTeam);
router.get('/:id', teamCtrl.getTeamDrivers);
router.post("/", teamCtrl.createTeam);
router.put("/:id", teamCtrl.updateTeam);
router.delete("/:id", teamCtrl.deleteTeam);

module.exports = router;
