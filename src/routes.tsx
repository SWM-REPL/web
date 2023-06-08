import React from 'react';

import { SignIn, SignUp, TodoList } from './components/templates';

interface RoutePath {
  path: string;
  element: JSX.Element;
}

export const RoutePaths: Record<string, RoutePath> = {
  Home: {
    path: '/',
    element: <TodoList />,
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
