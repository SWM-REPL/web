import axios from 'axios';

import { backendUrl } from '../constants';

export const instance = axios.create({
  baseURL: backendUrl,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  validateStatus: (status) => status < 500,
});
