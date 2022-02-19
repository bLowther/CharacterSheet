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

const score = {
  position: "absolute",
  top: "7%",
  left: "22%",
  height: "5vw",
  width: "4.4vw",
  fontSize: "4vw"
}

const attribute = {
    position: "absolute",
    bottom: "5%",
    left: "23%",
    height: "1.4vw",
    width: "4.4vw",
    fontSize: "1.4vw"
}

function Shield({ab, rb, asi, atr}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const base = ab ? ab : 0;
  const race = rb ? rb : 0;
  const bonus = asi ? asi : 0;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div style={image}>
      <Typography
        sx={score}
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        {base + race + bonus}
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