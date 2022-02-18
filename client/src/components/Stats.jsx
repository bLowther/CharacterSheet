import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import axios from 'axios';
import Bar from '../parts/statBar';

function Stats() {
  const [base, setBase] = useState({});

  useEffect(() => {
    axios.get('http://localhost:3000/api/stats')
    .then(res => {
      setBase(res.data.base)
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <Box >
      <Bar stats={base}/>
    </Box>
  );
}

export default Stats;