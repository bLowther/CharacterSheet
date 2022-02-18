import React from 'react';
import { Box } from '@mui/material';
import Bar from '../parts/statBar';

function Stats({abilities, raceBonus, asi}) {

  return (
    <Box >
      <Bar abilities={abilities} raceBonus={raceBonus} asi={asi}/>
    </Box>
  );
}

export default Stats;