import React from 'react';
import { Box, Grid } from '@mui/material';
import Profile from '../parts/profile';
import Bar from '../parts/statBar';
import Glance from '../parts/combatQuickGlance';

function Stats({stats, info, setInfo, pBonus}) {

  return (
    <Box >
      <Grid container direction="row">
        <Grid item>
          <Profile
            info={info}
            setInfo={setInfo}
          />
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
          <Glance />
        </Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;