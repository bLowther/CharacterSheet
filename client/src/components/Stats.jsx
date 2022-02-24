import React from 'react';
import { Box, Grid } from '@mui/material';
import Profile from '../parts/profile';
import Bar from '../parts/statBar';
import Skills from '../parts/skills';

function Stats({stats, info, setInfo}) {

  const level = stats.classes.reduce((previousValue, currentValue) => previousValue + currentValue.level, 0)
  const pBonus = level > 16 ? 6 : level > 12 ? 5 : level > 8 ? 4 : level > 4 ? 3 : 2;

  return (
    <Box >
      <Grid container direction="row">
        <Grid item>
          <Profile info={info} setInfo={setInfo}/>
        </Grid>
        <Grid item>
          <Bar
            pBonus={pBonus}
            abilities={stats.abilities}
            raceBonus={stats.raceBonus}
            asi={stats.asi}
            bonus={stats.bonuses}
            prof={stats.profs.saves}
            name={info.name}/>
        </Grid>
        <Grid item>
          <Skills pBonus={pBonus} bonuses={stats.bonuses} skills={stats.skills}/>
        </Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;