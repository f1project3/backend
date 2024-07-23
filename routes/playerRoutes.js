const router = require('express').Router();
const { playerCtrl } = require('../controllers/index') 

router.get('/', playerCtrl.getPlayer)
router.post('/', playerCtrl.createPlayer)

module.exports = router;
