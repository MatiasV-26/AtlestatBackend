const controller = require('../controllers/players');
const router = require('express').Router();

router.get('/', controller.getPlayers); 
router.get('/:playerId', controller.getPlayer); 
router.post('/', controller.createPlayer); 
router.put('/:playerId', controller.updatePlayer);
router.delete('/:playerId', controller.deletePlayer);

module.exports = router;