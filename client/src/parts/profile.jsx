import React, { useState, useEffect } from 'react';
import { Box, Grid, IconButton, Input } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Health from './health';

const inputStyle = {
  fontSize: 12,
  padding: 0,
  width: "2vw",
  left: "7%"
};

const tempStyle = {
  borderStyle: "groove",
  borderWidth: 2,
  borderColor: "#1976d2"
}

const inProp = {
  type: "number",
  min: 0,
  max: 300
}

// {name: '', image: '', background: '', race: '', currentHP: 1, maxHP: 1, tempHP: 0,}
const Profile = ({info, setInfo}) => {
  const [health, setHealth] = useState(100);
  const [color, setColor] = useState('success');
  const [temp, setTemp] = useState(0);
  const [input, setInput] = useState(0);
  const [shield, setShield] = useState(0);

  useEffect(() => {
    setTemp(Math.ceil(((info.tempHP * 100) / info.maxHP)));
    setHealth(Math.ceil(((info.currentHP * 100) / info.maxHP)));
    setShield(info.tempHP);
  },[info]);

  useEffect(() => {
    if(health > 33) {setColor('warning')}
    if(health > 66) {setColor('success')}
    if(health < 33) {setColor('error')}
  },[health]);

  const damage = () => {
    let hurt = Number(input) || 1;
    let extra = shield - hurt;
    if(extra < 0) {
      info.currentHP = Math.max(0, (info.currentHP + extra));
      info.tempHP = 0; 
    } else {
      info.tempHP = extra; 
    }
    setInfo({...info});
    setInput(0);
  }

  const heal = () => {   
    if(info.currentHP < info.maxHP) {
      const healing = Number(input) || 1;
      info.currentHP = Math.min(info.maxHP, (info.currentHP + healing));
      setInfo({...info});
      setInput(0);
    } 
  }

  return (
    <Box >
      <Grid container direction="column">
        <Grid item style={{textAlign: "center", fontSize: "1.2vw"}}>{info.race} {info.background}</Grid>                 
        <Grid item>
          <Grid container>
          <Grid item>
              <Grid container direction="column">
                <Grid item><Health color={color} health={health} temp={temp} image={info.image} /></Grid>
                <Grid item style={{textAlign: "center", fontSize: ".8vw"}}>{info.currentHP} / {info.maxHP}</Grid>
              </Grid> 
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid>Temp</Grid>
                <Grid item sx={tempStyle}>
                  <Input
                    sx={inputStyle}
                    inputProps={inProp}
                    value={shield} 
                    onChange={e => {setShield(e.target.value); info.tempHP = e.target.value; setInfo({...info});}}
                  />
                </Grid>
                <Grid item>
                  <IconButton aria-label="heal" color="success" size="small" style={{ padding: 0 }} onClick={() => heal()}>
                    <AddCircleIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <Input sx={inputStyle} inputProps={inProp} value={input} onChange={e => {setInput(e.target.value)}}/>
                </Grid>                
                <Grid item>
                  <IconButton aria-label="damage" color="error" size="small" style={{ padding: 0 }} onClick={() => damage()}>
                    <RemoveCircleIcon />
                  </IconButton>
                </Grid>                
              </Grid>
            </Grid>
          </Grid>
        </Grid>         
      </Grid>
    </Box>
  );
}

export default Profile;