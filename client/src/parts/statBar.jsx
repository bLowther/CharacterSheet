import React from 'react';
import { Box, Grid } from '@mui/material';
import Shield from './shield';

function Bar({abilities, raceBonus, asi, name, bonus }) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="column">
        <Grid item style={{textAlign: "center", fontSize: "2vw"}}>{name}</Grid>
        <Grid item>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Object.keys(abilities).map(key =>
              <Grid item key={key}>
                <Shield 
                  ab={abilities[key]}
                  rb={raceBonus[key]}
                  asi={asi[key]}
                  atr={key}
                  bonus={bonus[key]}
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