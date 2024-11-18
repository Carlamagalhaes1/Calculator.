import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  value: string;
  onClick: (value: string) => void;
}

export const Button: React.FC<ButtonProps> = ({ value, onClick }) => (
  <MuiButton
    variant="contained"
    fullWidth
    onClick={() => onClick(value)}
  >
    {value}
  </MuiButton>
);
