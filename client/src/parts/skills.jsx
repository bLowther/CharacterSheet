import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, OutlinedInput, MenuItem, FormControl, Select, ToggleButton  
} from '@mui/material';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import { d20 } from './dice';

function Skills({pBonus, bonuses, skills, armorProf, disStealth }) {

  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState('');
  const [bonus, setBonus] = useState('');
  const [advantage, setAdvantage] = useState(false);
  const [disadvantage, setDisadvantage] = useState(false);

  const handleSkill = e => {
    const value = e.target.value;
    const standard = {
      Acrobatics: 'DEX',
      Animal_Handling: 'WIS',
      Arcana: 'INT',
      Athletics: 'STR',
      Deception: 'CHA',
      History: 'INT',
      Insight: 'WIS',
      Intimidation: 'CHA',
      Investigation: 'INT',
      Medicine: 'WIS',
      Nature: 'INT',
      Perception: 'WIS',
      Performance: 'CHA',
      Persuasion: 'CHA',
      Religion: 'INT',
      Sleight_of_Hand: 'DEX',
      Stealth: 'DEX',
      Survival: 'WIS'
    }
    setSkill(value);
    setBonus(standard[value]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleToggle = e => {
    if(e.target.value === "advantage"){
      setAdvantage(!advantage);
      setDisadvantage(false);
    } else {
      setAdvantage(false);
      setDisadvantage(!disadvantage);
    }
  }

  const handleClose = () => {
      setOpen(false);
      setAdvantage(false);
      setDisadvantage(false);
      setBonus('');
      setSkill('');
  };

  const handleRoll = () => {
    const roll1 = d20();
    const roll2 = d20();
    const prof = skills[skill];
    const statBonus = bonuses[bonus];
    const modifier = Math.floor(pBonus * prof) + statBonus;
    const dis = `${skill} ${Math.min(roll1, roll2 )  + modifier}(${roll1}/${roll2} + ${statBonus}${prof > 0 ? ` + ${pBonus}` : ''})`;
    const adv =  `${skill} ${Math.max(roll1, roll2 ) + modifier}(${roll1}/${roll2} + ${statBonus}${prof > 0 ? ` + ${pBonus}` : ''})`;
    const normal = `${skill} ${roll1 + modifier}(${roll1}+${statBonus}${prof > 0 ? `+${pBonus}` : ''})`;
    const disArmor = !armorProf && (bonus === 'DEX' || bonus === 'STR');
    const loudArmor = disStealth && skill === 'Stealth';

    console.log(
      loudArmor && !advantage ? 
        `The armor you are wearing is hard to move in! ${dis}` :
      disArmor && !advantage ?
        `You're not Proficient with the armor you are wearing! ${dis}` :
      advantage && (loudArmor || disArmor) ?
        `Good thing you had Advantage! ${normal}` :
      advantage ?
        adv :
      disadvantage ?
        dis :
        normal
    );
    handleClose();
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>Make an Skill Check</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{textAlign: "center"}}>Choose an Skill</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Skill</InputLabel>
              <Select value={skill} onChange={handleSkill} input={<OutlinedInput label="Skill"/>}>
               {Object.keys(skills).map(key => 
                  skills[key] === 0 ? <MenuItem key={key} value={key}><PanoramaFishEyeIcon fontSize="small"/>{key}</MenuItem>
                  : skills[key] === .5 ? <MenuItem key={key} value={key}><ModeStandbyIcon fontSize="small"/>{key}</MenuItem>
                  : skills[key] === 1 ? <MenuItem key={key} value={key}><Brightness5Icon fontSize="small"/>{key}</MenuItem>
                  : <MenuItem key={key} value={key}><BrightnessHighIcon fontSize="small"/>{key}</MenuItem>
                )}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Ability</InputLabel>
              <Select value={bonus} onChange={e => setBonus(e.target.value)} input={<OutlinedInput label="Ability" />}>
                {Object.keys(bonuses).map(key => <MenuItem key={key} value={key}>{key}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <ToggleButton value="advantage" color="success" selected={advantage} onChange={handleToggle}>
            Adv
          </ToggleButton>
          <Button onClick={handleRoll}>Roll Check!</Button>
          <ToggleButton value="disadvantage" color="error" selected={disadvantage} onChange={handleToggle}>
            Dis
          </ToggleButton>
          <Button onClick={handleClose}>Cancel</Button>          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Skills;