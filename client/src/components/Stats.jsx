import React from 'react';
import { Box, Grid } from '@mui/material';
import Profile from '../parts/stats/profile';
import Bar from '../parts/stats/statBar';
import Glance from '../parts/stats/combatQuickGlance';

function Stats({stats, info, setInfo, pBonus, armorProf, ac, wearingShield, baseMove}) {

  return (
    <Box >
      <Grid container direction="row" spacing={1} wrap='nowrap'>
        <Grid item>
          <Profile
            info={info}
            setInfo={setInfo}
          />
        </Grid>
        <Grid item>
          <Bar
            pBonus={pBonus}
            armorProf={armorProf}
            abilities={stats.abilities}
            raceBonus={stats.raceBonus}
            asi={stats.asi}
            bonus={stats.bonuses}
            saveProfs={stats.profs.saves}
            name={info.name}/>
        </Grid>
        <Grid item>
          <Glance
            race={info.race}
            classes={stats.classes}
            bonuses={stats.bonuses}
            strScore={stats.abilities.STR}
            armorProf={armorProf}
            ac={ac}
            wearingShield={wearingShield}
            baseMove={baseMove}
          />
        </Grid>
      </Grid> 
    </Box>
  );
}

export default Stats;