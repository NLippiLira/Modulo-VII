// controllers/user.controller.js
const { User, Bootcamp } = require('../models');

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.findAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ include: Bootcamp });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.findUserById = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: Bootcamp
    });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json(user);
  } catch (err) {
    next(err);
  }
};

exports.updateUserById = async (req, res, next) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Actualizado correctamente' });
  } catch (err) {
    next(err);
  }
};

exports.deleteUserById = async (req, res, next) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ message: 'Eliminado correctamente' });
  } catch (err) {
    next(err);
  }
};