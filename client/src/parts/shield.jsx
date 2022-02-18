import React from 'react';

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
  top: "13%",
  left: "27%",
  fontSize: "4vw"
}

const attribute = {
    position: "absolute",
    bottom: 0,
    left: "35%",
    fontSize: "1.5vw"
}

function Shield({num, atr}) {

  return (
    <div style={image}>
      <div style={score}>{num}</div>
      <div style={attribute}>{atr}</div>
    </div>
  );
}

export default Shield;