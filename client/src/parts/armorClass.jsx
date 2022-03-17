import React, {useState, useEffect} from 'react';

function Armor ({ac, bonuses, race, classes, wearingShield}) {
  const [equipmentBonus, setEquipmentBonus] = useState(0);
  const [classArmor, setClassArmor] = useState(0);
  const [raceArmor, setRaceArmor] = useState(0);

  useEffect(()=>{
    setEquipmentBonus(ac.dex_bonus ? ac.base + Math.min(ac.max_bonus, bonuses.DEX) : ac.base);
  },[ac, wearingShield])

  useEffect(()=>{
    const isMonk = classes.findIndex(ele => ele.class === 'Monk');
    const isBarbarian = classes.findIndex(ele => ele.class === 'Barbarian');
    const monkBonus = isMonk >= 0 && wearingShield === 0 ? bonuses.WIS : 0;
    const barbarianBonus = isBarbarian < 0 ? 0 : bonuses.CON;
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
    <div>{Math.max(equipmentBonus, raceArmor, classArmor) + wearingShield}</div>
  );
}

export default Armor;