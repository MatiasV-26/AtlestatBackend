const controller = require('../controllers/playerattendancestats');
const router = require('express').Router();

router.get('/', controller.getPlayerattendancestats); // /users
router.get('/:playerattendancestatId', controller.getPlayerattendancestat); // /users/:userId
router.post('/', controller.createPlayerattendancestat); // /users
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;