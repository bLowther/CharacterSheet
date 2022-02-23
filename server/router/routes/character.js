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
      classes: [{class: 'Warlock', level: 1, subclass: null}],
      abilities: {STR: 8, DEX: 10, CON: 12, INT: 13, WIS: 14, CHA: 15},
      asi: {},
      feats: [],
      bonuses: {STR: -1, DEX: 0, CON: 1, INT: 2, WIS: 2, CHA: 3},
      skills: {
        Acrobatics: {prof: 0, default: 'DEX'},
        Animal_Handling: {prof: 0, default: 'WIS'},
        Arcana: {prof: 1, default: 'INT'},
        Athletics: {prof: 0, default: 'STR'},
        Deception: {prof: 1, default: 'CHA'},
        History: {prof: 0, default: 'INT'},
        Insight: {prof: 1, default: 'WIS'},
        Intimidation: {prof: 0, default: 'CHA'},
        Investigation: {prof: 0, default: 'INT'},
        Medicine: {prof: 0, default: 'WIS'},
        Nature: {prof: 0, default: 'INT'},
        Perception: {prof: 0, default: 'WIS'},
        Performance: {prof: 0, default: 'CHA'},
        Persuasion: {prof: 0, default: 'CHA'},
        Religion: {prof: 1, default: 'INT'},
        Sleight_of_Hand: {prof: 0, default: 'DEX'},
        Stealth: {prof: 0, default: 'DEX'},
        Survival: {prof: 0, default: 'WIS'}
      },
      profs: {
        armor: ['Light Armor'],
        weapons: ['Simple Weapons'],
        tools: [],
        languages: ['Common', 'Dwarvish', 'Elvish']
      }
    },
    equipment: {
      equiped: [],
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