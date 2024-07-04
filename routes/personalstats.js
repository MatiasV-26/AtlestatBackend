const controller = require('../controllers/personalstats');
const router = require('express').Router();

router.get('/', controller.getPersonalstats); // /users
router.get('/:personalstatId', controller.getPersonalstat); // /users/:userId
router.post('/', controller.createPersonalstat); // /users
router.put('/:personalstatId', controller.updatePersonalStats); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;