// app.js
const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});