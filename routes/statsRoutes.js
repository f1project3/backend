const router = require('express').Router();
const { statsCtrl } = require('../controllers') //all functions/methods imported from people's controller's index.js

// ROUTES - METHODS //
router.get('/', statsCtrl.getStats)
router.post('/', statsCtrl.createStats)

module.exports = router;
