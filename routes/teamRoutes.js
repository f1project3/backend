const router = require("express").Router();
const { teamCtrl } = require("../controllers/index");

//Routes - Methods
router.get("/", teamCtrl.getTeam);
router.post("/", teamCtrl.createTeam);
router.put("/:id", teamCtrl.updateTeam);
router.delete("/:id", teamCtrl.deleteTeam);
module.exports = router;
