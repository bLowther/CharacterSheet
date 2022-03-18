import React, {useState, useEffect} from 'react';
import { Typography } from '@mui/material';

const image = {
  backgroundImage: `url("./AC.webp")`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  height: '6vw',
  width: '6vw'
}

const scoreStyle = {
  position: 'absolute',
  top: '45%',
  left: '23%',
  width: '3vw',
  height: '3vw',
  textAlign: 'center',
  fontSize: '2vw'
}

const titleStyle = {
  position: 'absolute',
  bottom: '7%',
  width: '6vw',
  height: '1vw',
  textAlign: 'center',
  fontSize: '1vw'
}

function Armor ({ac, bonuses, race, classes, wearingShield}) {
  const [equipmentBonus, setEquipmentBonus] = useState(0);
  const [classArmor, setClassArmor] = useState(0);
  const [raceArmor, setRaceArmor] = useState(0);

  useEffect(()=>{
    const lightArmor = ac.base + bonuses.DEX;
    const mediumArmor = ac.base + Math.min(ac.max_bonus, bonuses.DEX);
    const heavyArmor = ac.base;
    setEquipmentBonus(ac.dex_bonus ? ac.max_bonus ? mediumArmor : lightArmor : heavyArmor);
  },[ac, wearingShield])

  useEffect(()=>{
    const unarmored = ac.base === 0
    const isMonk = classes.findIndex(ele => ele.class === 'Monk');
    const isBarbarian = classes.findIndex(ele => ele.class === 'Barbarian');
    const monkBonus = isMonk >= 0 && wearingShield === 0 && unarmored ? bonuses.WIS : 0;
    const barbarianBonus = isBarbarian < 0 && unarmored ? 0 : bonuses.CON;
    setClassArmor(10 + bonuses.DEX + Math.max(monkBonus, barbarianBonus));
  }, [classes, wearingShield])

  useEffect(()=>{
    const racesWithNaturalArmor = {
      Lizardfolk: {base: 13, stat: 'DEX'},
      Luxodon: {base: 12, stat: 'CON'},
      Locatha: {base: 13, stat: 'DEX'}, 
      Tortles: {base: 17, stat: null}
    }
    const isRaceWithArmor = racesWithNaturalArmor[race];
    setRaceArmor(isRaceWithArmor ? isRaceWithArmor.base + (bonuses[isRaceWithArmor.stat] || 0) : 10 + bonuses.DEX);
  }, [race, wearingShield])

  return (
    <div style={{position: "relative", height: '7vw', width: '7vw'}}>
      <div style={image}>
        <Typography sx={scoreStyle}>{Math.max(equipmentBonus, raceArmor, classArmor) + wearingShield}</Typography>
      </div>
      <Typography sx={titleStyle}>Armor Class</Typography>
    </div>
  );
}

export default Armor;