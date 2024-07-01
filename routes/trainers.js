const controller = require('../controllers/trainers');
const router = require('express').Router();

router.get('/', controller.getTrainers); 
router.get('/:trainerId', controller.getTrainer); 
router.post('/', controller.createTrainer); 
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;