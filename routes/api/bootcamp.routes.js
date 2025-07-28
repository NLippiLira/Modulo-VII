// routes/api/bootcamp.routes.js
const router = require('express').Router();
const ctrl = require('../../controllers/api/bootcamp.controller');

router.post   ('/bootcamps',                         ctrl.createBootcamp);
router.get    ('/bootcamps',                         ctrl.findAllBootcamps);
router.get    ('/bootcamps/:id',                     ctrl.findBootcampById);
router.post   ('/bootcamps/:bootcampId/users/:userId', ctrl.addUser);

module.exports = router;