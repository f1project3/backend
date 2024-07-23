const router = require('express').Router();
const { statsCtrl } = require('../controllers/index') 


router.get('/', statsCtrl.getStats)
router.post('/', statsCtrl.createStats)

module.exports = router;
