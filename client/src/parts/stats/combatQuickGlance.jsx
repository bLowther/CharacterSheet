import React, {useState, useEffect} from 'react';
import { Box, Grid } from '@mui/material';
import Init from './initiative';
import Move from './movement';
import Armor from './armorClass';
import Defences from './defences'

function Glance({race, classes, bonuses, strScore, armorProf, ac, wearingShield, baseMove}) {

  return (
    <Box >
      <Grid container direction="column">
        <Grid item>
          <Grid container direction="row">
            <Grid item><Defences/></Grid>
            <Grid item>
              <Armor
                ac={ac.armor_class}
                bonuses={bonuses}
                race={race}
                classes={classes}
                wearingShield={wearingShield}
              />
            </Grid> 
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row">
            <Grid item>
              <Init
                dexBonus={bonuses.DEX}
                classes={classes}
                armorProf={armorProf}
              />
            </Grid>
            <Grid item>
              <Move
                race={race}
                baseMove={baseMove}
                strReq={ac.str_minimum}
                strScore={strScore}
                classes={classes}
                armorType={ac.armor_category}
                wearingShield={wearingShield}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Glance;