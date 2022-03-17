import React, { useState } from 'react';
import { Typography, ToggleButton } from '@mui/material';
import { d20 } from './dice';

const image = {
  backgroundImage: `url("./Initiative.webp")`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  textAlign: 'center',
  top: '10%',
  height: '6vw',
  width: '8vw'
}

const titleStyle = {
  position: 'absolute',
  top: '0%',
  width: '8vw',
  height: '2vw',
  textAlign: 'center',
}

const colorHeight= '4.8vw';
const colorWidth = '3.2vw';
const colorVert = '8%';
const red = {
  backgroundColor: 'red',
  position: 'absolute',
  height: colorHeight,
  width: colorWidth,
  right: '11%',
  bottom: colorVert
}

const green = {
  backgroundColor: 'green',
  position: 'absolute',
  height: colorHeight,
  width: colorWidth,
  left: '10%',
  bottom: colorVert
}

const socreSize = '3vw';
const scoreStyle = {
  position: 'absolute',
  top: '20%',
  width: '8vw',
  height: socreSize,
  lineHeight: socreSize,
  fontSize: socreSize
}

const toggleSize= '1.8vw';
const toggleDist = '18%';
const togglePos = '70%';
const toggleFont = '1vw'
const advantageStyle = {
  position: 'absolute',
  top: togglePos,
  left: toggleDist,
  width: toggleSize,
  height: toggleSize,
  fontSize: toggleFont
}
const disadvantageStyle = {
  position: 'absolute',
  top: togglePos,
  right: toggleDist,
  width: toggleSize,
  height: toggleSize,
  fontSize: toggleFont
}

function Init({dexBonus, classes, armorProf}) { // class features and magic items can give advantage, conditions can give disadvantage
  const [advantage, setAdvantage] = useState(false);
  const [disadvantage, setDisadvantage] = useState(false); 

  const handleRoll = ()=>{
    const roll1 = d20();
    const roll2 = d20();
    const normal = `Position in Initiative: ${roll1 + dexBonus}(${roll1}+${dexBonus})`;
    const adv = `Position in Initiative: ${Math.max(roll1, roll2)  + dexBonus}(${roll1}/${roll2} + ${dexBonus})`;
    const dis = `Position in Initiative: ${Math.min(roll1, roll2)  + dexBonus}(${roll1}/${roll2} + ${dexBonus})`;
    console.log(`${
      !armorProf && !advantage ?
        `You're not Proficient with the armor you are wearing! ${dis})` :
      advantage && !armorProf ?
        `Good thing you had Advantage! ${normal})` :
      advantage ?
        adv :
      disadvantage ?
        dis : 
        normal
    }`) 
  }

  const handleToggle = e => {
    if(e.target.value === "advantage"){
      setAdvantage(!advantage);
      setDisadvantage(false);
    } else {
      setAdvantage(false);
      setDisadvantage(!disadvantage);
    }
  }

  return (
    <div style={{position: "relative", height: '7vw', width: '8vw'}}> 
      <div style={advantage ? green : disadvantage ? red : {}}/>
      <div style={image}>
        <Typography sx={scoreStyle} onClick={handleRoll}>{dexBonus}</Typography>
        <div >
          <ToggleButton sx={advantageStyle} value="advantage" selected={advantage} onChange={handleToggle}>
            Adv
          </ToggleButton>
          <ToggleButton sx={disadvantageStyle} value="disadvantage" selected={disadvantage} onChange={handleToggle}>
            Dis
          </ToggleButton>
        </div>
      </div>
      <Typography sx={titleStyle}>Initiative</Typography>
    </div>
  );
}

export default Init;