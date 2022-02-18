import React from 'react';
import { Box, Grid } from '@mui/material';
import Shield from './shield';

function Bar({stats}) {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Object.keys(stats).map(key =>
          <Grid item key={key}><Shield num={stats[key]} atr={key} /></Grid>
        )}
      </Grid>
    </Box>
  );
}

export default Bar;