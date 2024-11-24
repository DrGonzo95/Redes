const express = require('express');
const app = express();

app.get('/eventos', (req, res) => {
    // Configurar headers para SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-open');

    // Función para enviar eventos
    const enviarEvento = () => {
        const datos = {
            temperatura: Math.random() * 30,
            humedad: Math.random() * 100
        };

        // Formato evento SSE
        res.write(`event: datos-sensor\n`);
        res.write(`data: ${JSON.stringify(datos)}\n\n`);
    };

    // Enviar evento cada 3 segundos
    const intervalo = setInterval(enviarEvento, 3000);

    // Manejar cierre de conexión
    req.on('close', () => {
        clearInterval(intervalo);
        res.end();
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
    console.log('Servidor SSE corriendo');
});