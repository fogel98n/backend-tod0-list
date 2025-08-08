// Importar dependencias
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Carga variables del archivo .env

// Crear la app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para parsear JSON

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

// Ruta de API ejemplo
app.get('/api/saludo', (req, res) => {
  res.json({ mensaje: 'Hola desde la API' });
});

// Puerto desde .env o por defecto 3000
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
