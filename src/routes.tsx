import React from 'react';

import { SignIn } from './components/templates/signin';
import { SignUp } from './components/templates/signup';

interface RoutePath {
  path: string;
  element: JSX.Element;
}

export const RoutePaths: Record<string, RoutePath> = {
  Home: {
    path: '/',
    element: <div>Home</div>,
  },
  SignIn: {
    path: '/signin',
    element: <SignIn />,
  },
  SignUp: {
    path: '/signup',
    element: <SignUp />,
  },
};
