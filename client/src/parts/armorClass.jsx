import React, {useState, useEffect} from 'react';
//{base:0, dex_bonus: true, max_bonus: null}
function Armor ({ac, bonuses, race, classes}) {
  const [equipmentBonus, setEquipmentBonus] = useState(0);
  const racesWithNaturalArmor = {
    Lizardfolk: {base: 13, stat: 'DEX'},
    Luxodon: {base: 12, stat: 'CON'},
    Locatha: {base: 13, stat: 'DEX'}, 
    Tortles: {base: 17, stat: null}
  }
  const isRaceWithArmor = racesWithNaturalArmor[race];
  const naturalArmor = isRaceWithArmor ? isRaceWithArmor.base + (bonuses[isRaceWithArmor.stat] || 0) : 10 + bonuses.DEX;
  const isMonk = classes.includes(ele => ele.class === 'Monk');
  const monkArmor = isMonk ? 10 + bonuses.DEX + bonuses.WIS : 0; // not allowed if shield is equipped
  const isBarbarian = classes.includes(ele => ele.class === 'Barbarian');
  const barbarianArmor = isBarbarian ? 10 + bonuses.DEX + bonuses.CON : 0;
  useEffect(()=>{
    setEquipmentBonus(ac.dex_bonus ? ac.base + Math.min(ac.max_bonus, bonuses.DEX) : ac.base);
  },[ac])

  return (
    <div>{Math.max(equipmentBonus, naturalArmor, monkArmor, barbarianArmor)}</div>
  );
}

export default Armor;