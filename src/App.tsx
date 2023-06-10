import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Routes as RoutePaths } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {Object.values(RoutePaths).map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
