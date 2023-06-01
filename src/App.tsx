import React from 'react';

import theme from './assets/styles/theme';
import { SignIn } from './components/templates/signin';

import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
