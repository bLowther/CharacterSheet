import React, { useState } from 'react';
import { Popover, Typography } from '@mui/material';
import { d20 } from './dice';

const image = {
  backgroundImage: `url("./statShield.webp")`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  position: "relative",
  textAlign: "center",
  height: '8vw',
  width: '8vw'
}

const socreSize = "3.8vw";
const scoreStyle = {
  position: "absolute",
  top: "30%",
  width: "8vw",
  height: socreSize,
  lineHeight: socreSize,
  fontSize: socreSize
}

const bonusSize = "1.5vw"
const bonusStyle = {
  position: "absolute",
  top: "10%",
  width: "8vw",
  height: bonusSize,
  lineHeight: bonusSize,
  fontSize: bonusSize
}

const attSize = "1.2vw"
const attribute = {
    position: "absolute",
    bottom: "3%",
    width: "8vw",
    height: attSize,
    lineHeight: attSize,
    fontSize: attSize
}

function Shield({ab, rb, asi, atr, bonus, prof, pBonus}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const base = ab ? ab : 0;
  const race = rb ? rb : 0;
  const ASI = asi ? asi : 0;
  const score = base + race + ASI;
  const save = ()=>{const roll = d20(); return prof ? `${roll+bonus+pBonus}(${roll}+${bonus}+${pBonus})` : `${roll+bonus}(${roll}+${bonus})`}

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={image}>
      <Typography sx={bonusStyle}>{bonus}</Typography>
      <Typography
        sx={scoreStyle}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {score}
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>
          {(base > 0 ? `Base(${base}) ` : "") +
          (race > 0 ? `+ Racial Bonus(${race}) ` : "") +
          (ASI > 0 ? `+ ASI(${ASI})` : "")}
        </Typography>
      </Popover>
      {prof ? <Typography sx={attribute} onClick={()=>{console.log(save())}}><b>{atr}</b></Typography>
      : <Typography sx={attribute} onClick={()=>{console.log(save())}}>{atr}</Typography>}
    </div>
  );
}

export default Shield;