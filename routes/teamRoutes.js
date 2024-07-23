const router = require('express').Router();
const { teamCtrl } = require('../controllers/index') 
console.log('teamCtrl:', teamCtrl);

//Routes - Methods
router.get('/', teamCtrl.getTeam)
router.post('/', teamCtrl.createTeam)

module.exports = router;
