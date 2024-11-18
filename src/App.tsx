import React from 'react';
import Calculator from './components/Calculator';
import { CssBaseline, Container } from '@mui/material';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <GlobalStyles />
    <Container maxWidth="sm">
      <Calculator />
    </Container>
  </>
);

export default App;
