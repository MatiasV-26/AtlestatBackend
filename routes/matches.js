const controller = require('../controllers/matches');
const router = require('express').Router();

router.get('/', controller.getMatches); 
router.get('/:matchId', controller.getMatch); 
router.post('/', controller.createMatch); 
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;