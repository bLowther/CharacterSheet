const express = require('express');
const stats = require('./routes/stats.js');


const router = express.Router();

router.use('/stats', stats);

module.exports = router;