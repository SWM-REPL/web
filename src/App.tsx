import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './assets/styles/theme';
import { SignIn } from './components/templates/signin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}

export default App;
