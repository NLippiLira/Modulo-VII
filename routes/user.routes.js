// routes/user.routes.js
const router = require('express').Router();
const ctrl   = require('../controllers/user.controller');

router.post   ('/users',    ctrl.createUser);
router.get    ('/users',    ctrl.findAllUsers);
router.get    ('/users/:id',ctrl.findUserById);
router.put    ('/users/:id',ctrl.updateUserById);
router.delete ('/users/:id',ctrl.deleteUserById);

module.exports = router;