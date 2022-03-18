import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

function Move ({race, baseMove, strReq, strScore, classes, armorType, wearingShield}) { 
  const armorHeavy = strScore < strReq && race !== 'Dwarf';
  const preClassSpeed= armorHeavy? baseMove - 10 : baseMove;
  const unarmoredMovement = [0,0,10,10,10,10,15,15,15,15,20,20,20,20,25,25,25,25,30,30,30];
  const monk = classes.find(ele => ele.class === 'Monk');
  const monkSpeed = monk && wearingShield === 0 && armorType === '' ? unarmoredMovement[monk.level] : 0;
  const barbarian = classes.find(ele => ele.class === 'Barbarian');
  const barbSpeed = barbarian && barbarian.level && armorType !== 'Heavy'> 4 ? 10 : 0;
  const speed = barbSpeed + monkSpeed + preClassSpeed;
  const difficultTerrain = (num) => {
    const half = Math.floor(num/2);
    const roundedDown = half % 5;
    return half - roundedDown;
  }

  return (
    <Box>
      <Grid container direction="column" sx={{textAlign: 'center' }}>
        <Grid item><Typography>Movement</Typography></Grid>
        <Grid container direction="row" spacing={2} sx={{fontSize: '1vw'}}> 
          <Grid item><Typography>Walk: {speed}</Typography></Grid>
          <Grid item><Typography>Fly: 0</Typography></Grid>
          <Grid item><Typography>Swim: {difficultTerrain(speed)}</Typography></Grid>
          <Grid item><Typography>Climb: {difficultTerrain(speed)}</Typography></Grid> 
        </Grid>
      </Grid> 
    </Box>
  );
}

export default Move;