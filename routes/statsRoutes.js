const router = require("express").Router();
const { statsCtrl } = require("../controllers/index");

router.get("/", statsCtrl.getStats);
router.post("/", statsCtrl.createStats);
router.put("/:id", statsCtrl.updateStats);
router.delete("/:id", statsCtrl.deleteStats);
module.exports = router;
