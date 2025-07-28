// seed.js
const { sequelize, User, Bootcamp } = require('./models');

(async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate([
    { firstName: 'Mateo',    lastName: 'Díaz',      email: 'mateo.diaz@correo.com' },
    { firstName: 'Santiago', lastName: 'Mejías',    email: 'santiago.mejias@correo.com' },
    { firstName: 'Lucas',    lastName: 'Rojas',     email: 'lucas.rojas@correo.com' },
    { firstName: 'Facundo',  lastName: 'Fernández', email: 'facundo.fernandez@correo.com' }
  ]);

  const bootcamps = await Bootcamp.bulkCreate([
    {
      title: 'Introduciendo El Bootcamp De React',
      cue: 10,
      description: 'React es la librería más usada para interfaces'
    },
    {
      title: 'Bootcamp Desarrollo Web Full Stack',
      cue: 10,
      description: 'JavaScript, NodeJS, Angular, MongoDB, ExpressJS'
    },
    {
      title: 'Big Data, IA & Machine Learning',
      cue: 10,
      description: 'Data Science y herramientas de Big Data e IA'
    }
  ]);

  // Relaciones
  await bootcamps[0].addUsers([users[0], users[1]]);
  await bootcamps[1].addUser(users[0]);
  await bootcamps[2].addUsers([users[0], users[1], users[2]]);

  console.log('Seed completado');
  process.exit();
})();