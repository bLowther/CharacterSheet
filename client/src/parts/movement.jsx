import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const moveStyle = {
  width: '4vw',
  padding:0,
  borderRightStyle: 'groove',
  borderLeftStyle: 'groove',
  fontSize: '.8vw'
}

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
    <Box sx={{textAlign: 'center', position: "relative", height: '6vw', width: '18vw'}}>
      <Grid container direction="column" >
        <Grid item><Typography sx={{borderTopStyle: 'groove', fontSize: '1.5vw'}}>Movement</Typography></Grid>
        <Grid item >
          <Grid container direction="row" wrap='nowrap'sx={{borderTopStyle: 'groove', borderBottomStyle: 'groove', justifyContent: 'space-between'}}> 
            <Grid item><Typography sx={moveStyle}>Walk: {speed}</Typography></Grid>
            <Grid item><Typography sx={moveStyle}>Fly: 0</Typography></Grid>
            <Grid item><Typography sx={moveStyle}>Swim: {difficultTerrain(speed)}</Typography></Grid>
            <Grid item><Typography sx={moveStyle}>Climb: {difficultTerrain(speed)}</Typography></Grid> 
          </Grid>
        </Grid> 
      </Grid> 
    </Box>
  );
}

export default Move;