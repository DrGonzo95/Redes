const express = require('express');
const router = express.Router();

router.get('/random', (req, res) => {
    try {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        res.json({ num1, num2 });
    } catch (error) {
        res.status(500).json({ error: "Ha ocurrido un error al generar los números aleatorios" });
    }
});

module.exports = router;
