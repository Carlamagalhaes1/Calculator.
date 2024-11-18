import React from 'react';
import Calculator from './components/Calculator';
import { CssBaseline, Container, Box } from '@mui/material';
import { GlobalStyles } from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <CssBaseline />
    <GlobalStyles />
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Calculator />
      </Box>
    </Container>
  </>
);

export default App;
