const router = require('express').Router();
const { playerCtrl } = require('../controllers/index') 

router.get('/', playerCtrl.getPlayer)
router.post('/', playerCtrl.createPlayer)
router.put('/:id', playerCtrl.updatedPlayer)
router.delete('/:id', playerCtrl.deletedPlayer)
module.exports = router;
