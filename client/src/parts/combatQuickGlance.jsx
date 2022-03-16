import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Init from '../parts/initiative';
import Move from '../parts/movement';
import Armor from '../parts/armorClass';

function Glance({race, classes, bonuses, strScore, armorProf, ac}) {
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
    <div >
      <Init dexBonus={bonuses.DEX} classes={classes} armorProf={armorProf}/>
      <Move race={race} baseMove={baseMove} strReq={ac.str_minimum} strScore={strScore}/>
      <Armor ac={ac.armor_class} bonuses={bonuses} race={race} classes={classes}/>
    </div>
  );
}

export default Glance;