import React, { useState } from 'react';
import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import { Button } from './Button';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      setDisplay(safeEval(display));
    } else if (value === 'C') {
      setDisplay('');
    } else {
      setDisplay(display + value);
    }
  };

  const safeEval = (expression: string): string => {
    try {
      // Use Function constructor instead of eval for safer evaluation
      // Ensure that the expression contains only numbers and operators
      if (/^[\d+\-*/.() ]+$/.test(expression)) {
        // eslint-disable-next-line no-new-func
        const result = new Function('return ' + expression)();
        return result.toString();
      } else {
        throw new Error('Invalid expression');
      }
    } catch (error) {
      return 'Erro';
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
