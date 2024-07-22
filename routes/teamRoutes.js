const router = require('express').Router();
const { teamCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.get('/', teamCtrl.getTeam)
router.post('/', teamCtrl.createTeam)

module.exports = router;
