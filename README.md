Bootcamp App
Este proyecto es una aplicación web construida con Node.js, Express, Sequelize y EJS. Permite gestionar bootcamps y usuarios desde una interfaz de vistas y también ofrece un API REST para integraciones.

Tabla de contenidos
- Tecnologías
- Requisitos previos
- Instalación
- Configuración de la base de datos
- Scripts disponibles
- Ejecución de la aplicación
- Rutas y endpoints
- Estructura del proyecto
- Contribuir
- Licencia

Tecnologías
- Node.js
- Express
- Sequelize (ORM)
- EJS (motores de plantillas)
- MySQL / PostgreSQL / SQLite (configurable)
- Bootstrap (opcional para estilos)

Requisitos previos
Antes de iniciar, asegúrate de tener instalados:
- Git
- Node.js (v14 o superior) y npm
- Servidor de base de datos (MySQL, PostgreSQL o SQLite)

Instalación
- Clona el repositorio:
git clone https://github.com/tu-usuario/bootcamp-app.git
cd bootcamp-app
- Instala dependencias:
npm install
- Copia el archivo de ejemplo de variables de entorno:
cp .env.example .env
- Edita .env con tus credenciales de base de datos y puerto:
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=tu_contraseña
DB_NAME=bootcamp_db
PORT=3000



Configuración de la base de datos
- Crea la base de datos en tu servidor:
CREATE DATABASE bootcamp_db;
- Ejecuta migraciones (si usas Sequelize CLI):
npx sequelize-cli db:migrate
- (Opcional) Población inicial con seeds:
npx sequelize-cli db:seed:all



Scripts disponibles
| Comando | Descripción | 
| npm run dev | Arranca la app con nodemon para desarrollo | 
| npm start | Ejecuta la app en modo producción | 
| npx sequelize-cli db:migrate | Aplica migraciones en la base de datos | 
| npx sequelize-cli db:seed:all | Inserta datos de prueba | 



Ejecución de la aplicación
- En modo desarrollo:
npm run dev
- En modo producción:
npm start
- Abre tu navegador y visita:
- Vistas: http://localhost:3000
- API REST: http://localhost:3000/api/bootcamps

Rutas y endpoints
API REST (/api)
| Método | Ruta | Descripción | 
| GET | /api/bootcamps | Listar todos los bootcamps | 
| GET | /api/bootcamps/:id | Ver detalles de un bootcamp | 
| POST | /api/bootcamps | Crear un bootcamp | 
| POST | /api/bootcamps/:bootcampId/users/:userId | Agregar usuario a un bootcamp | 


Vistas (/)
| Ruta | Método | Descripción | 
| / | GET | Página principal con listado de bootcamps | 
| /bootcamps/new | GET | Formulario para crear un nuevo bootcamp | 
| /bootcamps | POST | Procesa creación y redirige al listado | 
| /bootcamps/:id | GET | Muestra detalle de un bootcamp | 



Estructura del proyecto
project-root/
├─ controllers/
│  ├─ api/            # Lógica API REST
│  └─ views/          # Lógica para renderizado EJS
├─ routes/
│  ├─ api/            # Rutas del API (prefijo /api)
│  └─ views/          # Rutas de vistas
├─ views/             # Plantillas EJS
├─ models/            # Definición de Sequelize
├─ public/            # CSS, JS y assets públicos
├─ .env               # Variables de entorno
├─ .gitignore
├─ app.js             # Punto de entrada de Express
└─ package.json



Contribuir
- Clona el repositorio y crea una rama nueva:
git checkout -b feature/nueva-funcionalidad
- Realiza tus cambios y empújalos:
git add .
git commit -m "Agrega nueva funcionalidad X"
git push origin feature/nueva-funcionalidad
- Abre un pull request en GitHub y describe tu propuesta.

Licencia
Este proyecto está bajo la licencia MIT. Revisa el archivo LICENSE para más detalles.
