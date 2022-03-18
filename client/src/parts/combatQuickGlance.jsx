import React, {useState, useEffect} from 'react';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import Init from '../parts/initiative';
import Move from '../parts/movement';
import Armor from '../parts/armorClass';

function Glance({race, classes, bonuses, strScore, armorProf, ac, wearingShield}) {
  const [baseMove, setBaseMove] = useState(0);

  useEffect(() => {
    if(race){
      axios.get(`http://localhost:3000/api/d&d/race/${race}`)
      .then(res => {
        setBaseMove(res.data.speed)
      })
      .catch(err => console.log(err))
    }
  }, [race])

  return (
    <Box>
      <Grid container direction="column">
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
    </Box>
  );
}

export default Glance;