import React, { useState } from 'react';
import {
  Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, OutlinedInput, MenuItem, FormControl, Select, ToggleButton  
} from '@mui/material';
import { d20 } from './dice';

function Skills({pBonus, bonuses, skills }) {

  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState('');
  const [bonus, setBonus] = useState('');
  const [advantage, setAdvantage] = useState(false);
  const [disadvantage, setDisadvantage] = useState(false);

  const handleSkill = e => {
    const value = e.target.value;
    const selectedSkill = skills[value];
    setSkill(value);
    setBonus(selectedSkill.standard);
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
    const prof = skills[skill].prof;
    const statBonus = bonuses[bonus];
    const modifier = Math.floor(pBonus * prof) + statBonus;

    advantage ? console.log(`${skill} ${Math.max(roll1, roll2 ) + modifier}(${roll1}/${roll2} + ${statBonus}${prof > 0 ? ` + ${pBonus}` : ''})`) :
    disadvantage ? console.log(`${skill} ${Math.min(roll1, roll2 )  + modifier}(${roll1}/${roll2} + ${statBonus}${prof > 0 ? ` + ${pBonus}` : ''})`) :
    console.log(`${skill} ${roll1 + modifier}(${roll1}+${statBonus}${prof > 0 ? `+${pBonus}` : ''})`);
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
                  skills[key].prof > 0 ? <MenuItem key={key} value={key}><b>{key}</b></MenuItem>
                  : <MenuItem key={key} value={key}>{key}</MenuItem>
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