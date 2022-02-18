import React from 'react';
import { Box, Grid } from '@mui/material';
import Profile from '../parts/profile';
import Bar from '../parts/statBar';

function Stats({stats, info, setInfo}) {

  return (
    <Box >
      <Grid container direction="row">
        <Grid item><Profile info={info} setInfo={setInfo}/></Grid>
        <Grid item><Bar abilities={stats.abilities} raceBonus={stats.raceBonus} asi={stats.asi}/></Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;