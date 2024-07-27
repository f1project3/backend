const router = require("express").Router();
const { driverCtrl } = require("../controllers/index");

router.get("/", driverCtrl.getDriver);
router.post("/", driverCtrl.createDriver);
router.put("/:id", driverCtrl.updatedDriver);
router.delete("/:id", driverCtrl.deletedDriver);

module.exports = router;
