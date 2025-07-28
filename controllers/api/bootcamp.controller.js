// controllers/api/bootcamp.controller.js
const { Bootcamp, User } = require('../../models');

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json(bootcamp);
  } catch (err) {
    next(err);
  }
};

exports.findAllBootcamps = async (req, res, next) => {
  try {
    const bcs = await Bootcamp.findAll({ include: User });
    res.json(bcs);
  } catch (err) {
    next(err);
  }
};

exports.findBootcampById = async (req, res, next) => {
  try {
    const bc = await Bootcamp.findByPk(req.params.id, { include: User });
    if (!bc) return res.status(404).json({ message: 'Bootcamp no encontrado' });
    res.json(bc);
  } catch (err) {
    next(err);
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { bootcampId, userId } = req.params;
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    const user = await User.findByPk(userId);
    if (!bootcamp || !user) return res.status(404).json({ message: 'No existe bootcamp o usuario' });
    await bootcamp.addUser(user);
    res.json({ message: `Agregado usuario ${userId} al bootcamp ${bootcampId}` });
  } catch (err) {
    next(err);
  }
};