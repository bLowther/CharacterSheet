const express = require('express');
// const axios = require('axios');

const router = express.Router();

const data = {
    base: {
        STR: 15,
        DEX: 14,
        CON: 13,
        INT: 8,
        WIS: 10,
        CHA: 12
    },
}

router.get('/', (req, res) => {
  res.send(data)
});

module.exports = router;