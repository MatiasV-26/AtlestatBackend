const controller = require('../controllers/playerattendancestats');
const router = require('express').Router();

router.get('/', controller.getPlayerattendancestats);
router.get('/:playerattendancestatId', controller.getPlayerattendancestat);
router.post('/', controller.createPlayerattendancestat);
router.put('/:playerattendancestatId', controller.updatePlayerattendancestat);
//router.delete('/:playerattendancestatId', controller.deletePlayerattendancestat);

module.exports = router;