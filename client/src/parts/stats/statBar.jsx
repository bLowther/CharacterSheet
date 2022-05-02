import React from 'react';
import { Box, Grid } from '@mui/material';
import Shield from './shield';

function Bar({abilities, raceBonus, asi, name, bonus, saveProfs, pBonus, armorProf }) {

  return (
    <Box>
      <Grid container direction="column" >
        <Grid item style={{textAlign: "center", fontSize: "2vw"}}>{name}</Grid>
        <Grid item>
          <Grid container wrap='nowrap'>
            {Object.keys(abilities).map(key =>
              <Grid item key={key}>
                <Shield 
                  ab={abilities[key]}
                  rb={raceBonus[key]}
                  asi={asi[key]}
                  atr={key}
                  bonus={bonus[key]}
                  prof={saveProfs.includes(key)}
                  pBonus={pBonus}
                  armorProf={armorProf}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Bar;