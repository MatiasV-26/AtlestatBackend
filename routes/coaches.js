const controller = require('../controllers/coaches');
const router = require('express').Router();

router.get('/', controller.getCoaches); 
router.get('/:coachId', controller.getCoach); 
router.post('/', controller.createCoach); 
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;