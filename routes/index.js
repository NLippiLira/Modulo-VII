// routes/index.js
const express = require('express');
const userRoutes     = require('./user.routes');
const bootcampRoutes = require('./bootcamp.routes');

const router = express.Router();

router.use('/', userRoutes);
router.use('/', bootcampRoutes);

module.exports = router;
