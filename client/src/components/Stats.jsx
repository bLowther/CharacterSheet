import React from 'react';
import { Box, Grid } from '@mui/material';
import Profile from '../parts/profile';
import Bar from '../parts/statBar';
import Skills from '../parts/skills';

function Stats({stats, info, setInfo}) {

  return (
    <Box >
      <Grid container direction="row">
        <Grid item><Profile info={info} setInfo={setInfo}/></Grid>
        <Grid item><Bar abilities={stats.abilities} raceBonus={stats.raceBonus} asi={stats.asi} bonus={stats.bonuses} name={info.name}/></Grid>
        <Grid item><Skills classes={stats.classes} bonuses={stats.bonuses} skills={stats.skills}/></Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;