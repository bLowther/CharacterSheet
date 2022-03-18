const express = require('express');
// const axios = require('axios');

const router = express.Router();

const mock = {
    user: 'test',
    password: 'password',
    info: {
      name: 'test character',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT77o2AhtNObLLnWPYuAxAAf_Q8L7ZaJLVSyA&usqp=CAU',
      background: 'Acolyte',
      race: 'Human',
      currentHP: 3,
      maxHP: 7,
      tempHP: 1
    },
    stats: {
      raceBonus: {STR: 1, DEX: 1, CON: 1, INT: 1, WIS: 1, CHA: 1},
      classes: [{class: 'Monk', level: 1, subclass: null}],
      abilities: {STR: 8, DEX: 10, CON: 12, INT: 13, WIS: 14, CHA: 15},
      asi: {},
      feats: [],
      bonuses: {STR: -1, DEX: 0, CON: 1, INT: 2, WIS: 2, CHA: 3}, // make sure to do this math server-side (Math.floor(raceBonus + abilities + asi - 10) / 2))
      skills: {
        Acrobatics: 0,
        Animal_Handling: 0,
        Arcana: 1,
        Athletics: 0,
        Deception: 1,
        History: 0,
        Insight: 1,
        Intimidation: 0,
        Investigation: 0,
        Medicine: 0,
        Nature: 0,
        Perception: 0,
        Performance: 0,
        Persuasion: 0,
        Religion: 1,
        Sleight_of_Hand: 0,
        Stealth: 0,
        Survival: 0
      },
      profs: {
        saves: ['WIS', 'CHA'],
        armor: ['Light'],
        weapons: ['Simple'],
        tools: [],
        languages: ['Common', 'Dwarvish', 'Elvish']
      }
    },
    equipment: {
      equiped: {armor: '', hands:{1:'', 2:''}},
      bag: [],
    },
    spells: {
      slots: [],
      prepared: [],
      known: []
    }
  }
  
  router.get('/', (req, res) => {
    res.send(mock)
  });
  
  module.exports = router;