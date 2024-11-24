// Servidor con múltiples tipos de eventos
app.get('/multi-eventos', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');

    const enviarEventos = () => {
        // Evento de sistema
        res.write(`event: sistema\n`);
        res.write(`data: Estado del servidor OK\n\n`);

        // Evento de usuario
        res.write(`event: usuario\n`);
        res.write(`data: Nuevo usuario conectado\n\n`);
    };

    const intervalo = setInterval(enviarEventos, 5000);
    req.on('close', () => clearInterval(intervalo));
});