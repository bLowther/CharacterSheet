import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel, OutlinedInput, MenuItem, FormControl, Select } from '@mui/material';
import { d20 } from './dice';

function Skills({pBonus, bonuses, skills }) {

  const [open, setOpen] = useState(false);
  const [skill, setSkill] = useState('');
  const [bonus, setBonus] = useState('');
  const [modifier, setModifier] = useState(0);

  const handleSkill = e => {
    const value = e.target.value;
    const selectedSkill = skills[value];
    setSkill(value);
    setBonus(selectedSkill.standard);
    setModifier(Math.floor(pBonus * selectedSkill.prof) + bonuses[selectedSkill.standard]);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
      setOpen(false);
      setBonus('');
      setSkill('');
  };

  const handleRoll = () => {
    const roll = d20();
    const prof = skills[skill].prof;
    console.log(`${skill} ${roll + modifier}(${roll}+${bonuses[bonus]}${prof > 0 ? `+${prof}` : ''})`);
    handleClose();
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>Make an Skill Check</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{textAlign: "center"}}>Choose an Skill</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Skill</InputLabel>
              <Select value={skill} onChange={handleSkill} input={<OutlinedInput label="Skill"/>}>
               {Object.keys(skills).map(key => <MenuItem key={key} value={key}>{key}</MenuItem>)}
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
          <Button onClick={handleRoll}>Roll Check!</Button>
          <Button onClick={handleClose}>Cancel</Button>          
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Skills;