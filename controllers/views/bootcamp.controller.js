// controllers/views/bootcamp.controller.js
const { Bootcamp, User } = require('../../models');

exports.showHome = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findAll({ include: User });
    res.render('index', { bootcamps });
  } catch (err) {
    next(err);
  }
};

exports.showNewForm = (req, res) => {
  res.render('new');
};

exports.createAndRedirect = async (req, res, next) => {
  try {
    await Bootcamp.create(req.body);
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

exports.showDetail = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByPk(req.params.id, { include: User });
    if (!bootcamp) return res.redirect('/');
    res.render('show', { bootcamp });
  } catch (err) {
    next(err);
  }
};