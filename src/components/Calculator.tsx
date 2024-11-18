import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { Button } from './Button';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Erro');
      }
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <Paper elevation={3}>
      <Box p={2}>
        <Typography variant="h4" align="center" gutterBottom>
          Calculadora
        </Typography>
        <TextField
          variant="outlined"
          fullWidth
          value={display}
          disabled
          margin="dense"
        />
        <Grid container spacing={1} mt={1}>
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((value) => (
            <Grid item xs={3} key={value}>
              <Button value={value} onClick={handleButtonClick} />
            </Grid>
          ))}
          <Grid item xs={6}>
            <Button value="C" onClick={handleButtonClick} />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Calculator;
