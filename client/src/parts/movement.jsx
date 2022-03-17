import React from 'react';

function Move ({race, baseMove, strReq, strScore, classes}) {  

  const armorHeavy = strScore < strReq && race !== "Dwarf"
// need to adjust for improved movement in Monk and Barbarian
const isMonk = classes.findIndex(ele => ele.class === 'Monk');
const isBarbarian = classes.findIndex(ele => ele.class === 'Barbarian');
  return (
    <div>{armorHeavy? baseMove - 10 : baseMove}</div>
  );
}

export default Move;