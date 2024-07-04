const controller = require('../controllers/playerattendances');
const router = require('express').Router();

router.get('/', controller.getPlayerattendances); // /users
router.get('/:playerattendanceId', controller.getPlayerattendance); // /users/:userId
router.post('/', controller.createPlayerattendance); // /users
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;