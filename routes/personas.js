const controller = require('../controllers/personas');
const router = require('express').Router();

router.get('/', controller.getPersonas); // /users
router.get('/:personId', controller.getPerson); // /users/:userId
router.post('/', controller.createPerson); // /users
router.put('/:personId', controller.updatePerson); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;