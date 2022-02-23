import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
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
    raceBonus: {},
    classes: [],
    abilities: {},
    asi: {},
    feats: [],
    bonuses: {},
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item>
          <Stats stats={stats} info={info} setInfo={setInfo}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;