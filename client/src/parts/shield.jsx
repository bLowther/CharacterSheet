import React, { useState } from 'react';
import { Popover, Typography } from '@mui/material';

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

function Shield({ab, rb, asi, atr}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const base = ab ? ab : 0;
  const race = rb ? rb : 0;
  const bonus = asi ? asi : 0;
  const score = base + race + bonus;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={image}>
      <Typography sx={bonusStyle}>{Math.floor((score-10)/2)}</Typography>
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
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography sx={{ p: 1 }}>{`Base(${base}) + Racial Bonus(${race}) + ASI(${bonus})`}</Typography>
      </Popover>
      <Typography sx={attribute}>{atr}</Typography>
    </div>
  );
}

export default Shield;