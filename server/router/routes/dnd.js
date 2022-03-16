const express = require('express');
const axios = require('axios');

const router = express.Router();

const endpoint = 'https://www.dnd5eapi.co/graphql';

router.get('/armorType/:armor', (req, res) => {
  const graphqlQuery = {
    "operationName": "Equipments",
    "query": `query Equipments($filter: FilterFindOneEquipmentInput) {
      equipment(filter: $filter) {
        armor_category
        armor_class {
          base
          dex_bonus
          max_bonus
        }
        stealth_disadvantage
        str_minimum
      }
    }`,
    "variables": {
      "filter": {
        "name": req.params.armor
      }
    }
  };

  axios({
    url: endpoint,
    method: 'post',
    data: graphqlQuery
  })
  .then((data) => {
    res.send(data.data.data.equipment)
  })
});


module.exports = router;