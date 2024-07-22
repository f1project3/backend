const router = require('express').Router();
const { playerCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.get('/', playerCtrl.getPlayer)
router.post('/', playerCtrl.createPlayer)

module.exports = router;
