const express = require('express');
const character = require('./routes/character.js');


const router = express.Router();

router.use('/character', character);

module.exports = router;