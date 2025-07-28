// app.js
const express = require('express');
const path = require('path');
const apiRoutes  = require('./routes/api/bootcamp.routes');
const viewRoutes = require('./routes/views/bootcamp.routes');

const app = express();

// Configuración básica
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/api', apiRoutes);
app.use('/', viewRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (req.originalUrl.startsWith('/api')) {
    res.status(500).json({ message: 'Error interno del servidor' });
  } else {
    res.status(500).render('error', { error: err });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));