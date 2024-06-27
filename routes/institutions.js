const controller = require('../controllers/institutions');
const router = require('express').Router();

router.get('/', controller.getInstitutions); // /users
router.get('/:institutionId', controller.getInstitution); // /users/:userId
router.post('/', controller.createInstitution); // /users
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;