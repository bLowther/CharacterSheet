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
        <Grid item><Bar abilities={stats.abilities} raceBonus={stats.raceBonus} asi={stats.asi} bonus={stats.bonus} name={info.name}/></Grid>
        <Grid item><Skills stats={stats}/></Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;