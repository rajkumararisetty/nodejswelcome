import jwt from 'jsonwebtoken';
import env from '../../.env';

export const validateToken = (request) => {
  const auth = request.get('Authorization');
  const token =  auth.split(' ')[1];
  return jwt.verify(token, env.secret, (error, payload) => {
    if (error) {
      throw 'Invalid Token';
    }

    return payload.id;
  });
};
