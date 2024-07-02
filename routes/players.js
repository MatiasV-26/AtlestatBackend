const controller = require('../controllers/players');
const router = require('express').Router();

router.get('/', controller.getPlayers); 
router.get('/:playerId', controller.getPlayer); 
router.post('/', controller.createPlayer); 
//router.put('/:userId', controller.updateUser); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;