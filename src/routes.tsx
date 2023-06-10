import React from 'react';
import { RouteProps } from 'react-router-dom';

import { SignInPage, SignUpPage } from './components/pages';
import { GroupList } from './components/templates/group-list';
import { TodoList } from './components/templates/todo-list';

type Route = Omit<RouteProps, 'path' | 'index'> & { path: string };

export const Routes: Record<string, Route> = {
  Home: {
    path: '/',
    element: <GroupList />,
  },
  SignIn: {
    path: '/signin',
    element: <SignInPage />,
  },
  SignUp: {
    path: '/signup',
    element: <SignUpPage />,
  },
  TodoList: {
    path: '/todo-list',
    element: <TodoList />,
  },
};
