const controller = require('../controllers/attendances');
const router = require('express').Router();

router.get('/', controller.getAttendances); 
router.get('/:attendanceId', controller.getAttendance); 
router.post('/', controller.createAttendance); 
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;