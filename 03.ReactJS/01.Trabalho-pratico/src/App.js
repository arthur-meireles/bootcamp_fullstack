import React from 'react';
import { Box, Grommet } from 'grommet'
import mainTheme from './themes/mainTheme.js';
import AppBar from './components/Appbar/AppBar';

function App() {
  return (
   <Grommet theme={mainTheme}>
     <AppBar/>
   </Grommet>
  );
}

export default App;
