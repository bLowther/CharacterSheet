const express = require('express');
const character = require('./routes/character.js');
const dnd = require('./routes/dnd.js');


const router = express.Router();

router.use('/character', character);
router.use('/d&d', dnd);

module.exports = router;