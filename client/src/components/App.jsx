import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import Stats from './Stats';
import Skills from '../parts/skills';

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
  const [equipment, setEquipment] = useState({equiped: {armor: '', hands:{}}, bag: []});
  const [spells, setSpells] = useState({slots: [], prepared: [], known: []});
  const [armorProf, setArmorProf] = useState(false);

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

  useEffect(() => {
    const armor = equipment.equiped.armor;
    if(armor){axios.get(`http://localhost:3000/api/d&d/${armor}`)
    .then(res => {
      setArmorProf(stats.profs.armor.includes(res.data));
    })
    .catch(err => console.log(err))}
  }, [equipment])

  const level = stats.classes.reduce((previousValue, currentValue) => previousValue + currentValue.level, 0)
  const pBonus = level > 16 ? 6 : level > 12 ? 5 : level > 8 ? 4 : level > 4 ? 3 : 2;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="column" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item>
          <Stats stats={stats} info={info} setInfo={setInfo} pBonus={pBonus} armor={equipment.equiped.armor} armorProf={armorProf}/>
        </Grid>
        <Grid item>
          <Skills pBonus={pBonus} bonuses={stats.bonuses} skills={stats.skills}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;