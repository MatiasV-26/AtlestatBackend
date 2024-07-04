const controller = require('../controllers/teams');
const router = require('express').Router();

router.get('/', controller.getTeams); 
router.get('/:teamId', controller.getTeam); 
router.post('/', controller.createTeam); 
router.put('/:teamId', controller.updateTeam); 
router.delete('/:teamId', controller.deleteTeam); 

module.exports = router;