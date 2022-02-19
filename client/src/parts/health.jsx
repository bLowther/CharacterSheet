import React from 'react';
import { CircularProgress } from '@mui/material';

const circleSize = "8vw"

const circleStyle = {
  padding: 0,
  top: 0,
  left: 0,
  position: "absolute"
};

const imgStyle = {
  width: circleSize,
  height: circleSize,
  borderRadius: "50%",
  justifyContent: "center",
  padding: 0
};

const divStyle = {
  position: "relative",
  height: circleSize,
  width: circleSize
}

function Health({color, health, temp, image }) {

  return (
    <div style={divStyle}>
      <img style={imgStyle} src={image}/>
      <CircularProgress
        sx={circleStyle}
        thickness={3}
        color={color}
        size={circleSize}
        variant="determinate"
        value={health}
      />
      <CircularProgress
        sx={circleStyle}
        thickness={3}
        size={circleSize}
        variant="determinate"
        value={temp}
      />
    </div>
  );
}

export default Health;