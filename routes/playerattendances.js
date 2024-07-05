const controller = require('../controllers/playerattendances');
const router = require('express').Router();

router.get('/', controller.getPlayerattendances); // /users
router.get('/:playerattendanceId', controller.getPlayerattendance); // /users/:userId
router.post('/', controller.createPlayerattendance); // /users
router.put('/:playerattendanceId', controller.updatePlayerattendance); // /users/:userId
router.delete('/:playerattendanceId', controller.deletePlayerattendance); // /users/:userId

module.exports = router;