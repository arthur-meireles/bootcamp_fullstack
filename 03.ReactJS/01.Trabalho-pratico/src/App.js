import React from 'react';
import { Box, Grommet } from 'grommet'
import theme from './theme';
import AppBar from './components/Appbar/AppBar';

function App() {
  return (
   <Grommet theme={theme}>
     <AppBar/>
   </Grommet>
  );
}

export default App;
