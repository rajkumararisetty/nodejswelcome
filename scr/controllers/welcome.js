import {validateToken} from '../services/welcomeService';

export const welcome = (request) => {
  try {
    const id = validateToken(request);
    return {status: 0, message: 'Welcome, Valid token', id: id};
  } catch (error) {
    return {status: 1, message: error};
  }
};