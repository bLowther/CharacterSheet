const express = require('express');
// const axios = require('axios');

const router = express.Router();

const data = {
    base: {
        STR: 20,
        DEX: 18,
        CON: 20,
        INT: 12,
        WIS: 14,
        CHA: 12
    },
}

router.get('/', (req, res) => {
  res.send(data)
});

module.exports = router;