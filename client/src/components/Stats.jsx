import React from 'react';
import { Box, Grid } from '@mui/material';
import Profile from '../parts/profile';
import Bar from '../parts/statBar';
import Glance from '../parts/combatQuickGlance';

function Stats({stats, info, setInfo, pBonus, armor, armorProf}) { // look up what happens when you aren't proficient with armor you wearing

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
            saveProfs={stats.profs.saves}
            name={info.name}/>
        </Grid>
        <Grid item>
          <Glance race={info.race} dex={stats.bonuses.DEX} armor={armor} armorProf={armorProf}/>
        </Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;