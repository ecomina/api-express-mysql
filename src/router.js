const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.status(200).send('Olá Mundo 3!!!'));

router.get('/Chamados', (req, res) => res.status(200).send('Chamados!!!'));


module.exports = router;