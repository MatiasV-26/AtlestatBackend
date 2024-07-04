const controller = require('../controllers/matchrelatedwithteamsc');
const router = require('express').Router();

router.get('/', controller.getMatchrelatedwithteamsc); // /users
router.get('/:matchrelatedwithteamsId', controller.getMatchrelatedwithteams); // /users/:userId
router.post('/', controller.createMatchrelatedwithteams); // /users
router.put('/:matchrelatedwithteamsId', controller.updateMatchrelatedwithteams); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;