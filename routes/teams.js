const controller = require('../controllers/teams');
const router = require('express').Router();

router.get('/', controller.getTeams); 
router.get('/:teamId', controller.getTeam); 
router.post('/', controller.createTeam); 
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;