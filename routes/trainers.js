const controller = require('../controllers/trainers');
const router = require('express').Router();

router.get('/', controller.getTrainers); 
router.get('/:trainerId', controller.getTrainer); 
router.post('/', controller.createTrainer); 
router.put('/:trainerId', controller.updateTrainer); 
router.delete('/:trainerId', controller.deleteTrainer); 

module.exports = router;