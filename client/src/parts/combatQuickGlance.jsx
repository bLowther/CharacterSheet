import React from 'react';
import { d20 } from './dice';
import Init from '../parts/initiative';

function Glance({race, classes, dex, str, armorProf, ac}) {

  return (
    <div >
      <Init dex={dex} classes={classes} armorProf={armorProf}/>
    </div>
  );
}

export default Glance;