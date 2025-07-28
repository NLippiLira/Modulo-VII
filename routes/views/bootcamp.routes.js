// routes/views/bootcamp.routes.js
const router = require('express').Router();
const ctrl = require('../../controllers/views/bootcamp.controller');

router.get('/'                , ctrl.showHome);
router.get('/bootcamps/new'   , ctrl.showNewForm);
router.post('/bootcamps'       , ctrl.createAndRedirect);
router.get('/bootcamps/:id'   , ctrl.showDetail);

module.exports = router;