const controller = require('../controllers/admins');
const router = require('express').Router();

router.get('/', controller.getAdmins); 
router.get('/:adminId', controller.getAdmin); 
router.post('/', controller.createAdmin); 
router.put('/:adminId', controller.updateAdmin); // /users/:userId
//router.delete('/:userId', controller.deleteUser); // /users/:userId

module.exports = router;