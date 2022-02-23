import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

function Skills({classes, bonuses, skills }) {

  const [skill, setSkill] = useState(0);
  const [bonus, setBonus] = useState(0);

  const level = classes.reduce((previousValue, currentValue) => previousValue + currentValue.level, 0)
  const pBonus = level > 16 ? 6 : level > 12 ? 5 : level > 8 ? 4 : level > 4 ? 3 : 2;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container direction="column">
        
      </Grid>
    </Box>
  );
}

export default Skills;