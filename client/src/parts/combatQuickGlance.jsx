import React from 'react';
import Init from '../parts/initiative';
import Move from '../parts/movement';

function Glance({race, classes, dexBonus, strScore, armorProf, ac}) {

  return (
    <div >
      <Init dexBonus={dexBonus} classes={classes} armorProf={armorProf}/>
      <Move race={race} strReq={ac.str_minimum} strScore={strScore}/>
    </div>
  );
}

export default Glance;