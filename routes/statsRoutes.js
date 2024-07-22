const router = require('express').Router();
const { statsCtrl } = require('../controllers') 


router.get('/', statsCtrl.getStats)
router.post('/', statsCtrl.createStats)

module.exports = router;
