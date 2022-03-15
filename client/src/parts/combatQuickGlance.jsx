import React from 'react';
import { d20 } from './dice';

function Glance({race, dex, armor, armorProf }) {

  return (
    <div >
      Move speeds {race}, Initiative {dex}, AC {armor}
    </div>
  );
}

export default Glance;