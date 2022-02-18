import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Stats from './Stats';

function App() {
  const [info, setInfo] = useState({
    name: '',
    image: '',
    background: '',
    race: '',
    currentHP: 1,
    maxHP: 1,
    tempHP: 0
  });
  const [stats, setStats] = useState({
    raceBonus: {1: [], 2: []},
    playerClass: {},
    abilities: {},
    asi: {},
    feats: [],
    skills: {},
    profs: {}
  });
  const [equipment, setEquipment] = useState({equiped: [], bag: []});
  const [spells, setSpells] = useState({slots: [], prepared: [], known: []});

  useEffect(() => {
    axios.get('http://localhost:3000/api/character')
    .then(res => {
      setInfo(res.data.info);
      setStats(res.data.stats);
      setEquipment(res.data.equipment);
      setSpells(res.data.spells);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <Stats abilities={stats.abilities} raceBonus={stats.raceBonus} asi={stats.asi}/>
  );
}

export default App;