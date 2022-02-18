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
  left: "23%",
  height: "5vw",
  width: "4.4vw",
  fontSize: "4vw"
}

const attribute = {
    position: "absolute",
    bottom: "4%",
    left: "23%",
    height: "1.4vw",
    width: "4.4vw",
    fontSize: "1.4vw"
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