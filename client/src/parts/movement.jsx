import React from 'react';

function Move ({race, baseMove, strReq, strScore}) {  

  const armorHeavy = strScore < strReq && race !== "Dwarf"

  return (
    <div>{armorHeavy? baseMove - 10 : baseMove}</div>
  );
}

export default Move;