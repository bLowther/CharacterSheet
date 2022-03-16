import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Move ({race, strReq, strScore}) {  
  const [base, setBase] = useState(0);

  useEffect(() => {
    if(race){
      axios.get(`http://localhost:3000/api/d&d/movement/${race}`)
      .then(res => {
        setBase(res.data.speed)
      })
      .catch(err => console.log(err))
    }
  }, [race])

  const armorHeavy = strScore < strReq && race !== "Dwarf"

  return (
    <div>{armorHeavy? base - 10 : base}</div>
  );
}

export default Move;