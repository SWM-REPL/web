import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import theme from './assets/styles/theme';
import { SignIn } from './components/templates/signin';
import { SignUp } from './components/templates/signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
