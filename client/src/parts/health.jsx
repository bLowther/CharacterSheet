import React from 'react';
import { CircularProgress } from '@mui/material';

const circleStyle = {
  padding: 0,
  top: 0,
  left: 0,
  position: "absolute"
};

const imgStyle = {
  width: "7.8vw",
  height: "7.8vw",
  borderRadius: "50%",
  justifyContent: "center",
  padding: 0
};

const divStyle = {
  position: "relative",
  height: '8vw',
  width: '8vw'
}

function Health({color, health, temp, image}) {

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={image}/>
      <CircularProgress
        sx={circleStyle}
        thickness={3}
        color={color}
        size={"7.8vw"}
        variant="determinate"
        value={health}
      />
      <CircularProgress
        sx={circleStyle}
        thickness={3}
        size={"7.8vw"}
        variant="determinate"
        value={temp}
      />
    </div>
  );
}

export default Health;