const express = require('express');
const router = express.Router();

//PATH PARAMS
router.get('/sum/:num1/:num2', (req, res) => {
    try {
        const { num1, num2 } = req.params;
        const result = parseInt(num1) + parseInt(num2);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: "Ha ocurrido un error al sumar los números" });
    }
});

//QUERY PARAMS
router.get('/sum', (req, res) => {
    try {
        const num1 = parseInt(req.query.num1);
        const num2 = parseInt(req.query.num2);
        const result = num1 + num2;
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: "Ha ocurrido un error al sumar los números" });
    }
});

// HEADERS PARAMS
router.get('/sum-headers', (req, res) => {
    try {
        const num1 = parseInt(req.headers['num1']);
        const num2 = parseInt(req.headers['num2']);
        const result = num1 + num2;
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: "Ha ocurrido un error al sumar los números" });
    }
});

//REQUEST BODY
router.post('/sum', express.json(), (req, res) => {
    try {
        const { num1, num2 } = req.body;
        const result = parseInt(num1) + parseInt(num2);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: "Ha ocurrido un error al sumar los números" });
    }
});



module.exports = router;
