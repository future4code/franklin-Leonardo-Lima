import { knex } from '../config/connection';
import { v4 as uuid } from 'uuid';
import { jwtSign, jwtVerify } from '../utils/jwtUtil';
import User from '../model/User';
import UserSignup from '../types/UserSignup';
import UserLogin from '../types/UserLogin';

export default class StudentService {
  async signup(user: UserSignup) {
    const id = uuid();
    return await knex('Users')
      .insert({
        id: id,
        ...user,
      })
      .then(() => {
        return {
          code: 201,
          result: jwtSign({ id: id, name: user.name, email: user.email }),
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async login(user: UserLogin) {
    return await knex('Users')
      .where('email', user.email)
      .then((result: Array<User>) => {
        const [userResult] = result;
        if (userResult.password != user.password) throw new Error();
        return {
          code: 200,
          result: jwtSign({
            id: userResult.id,
            name: userResult.name,
            email: userResult.email,
          }),
        };
      })
      .catch((error) => {
        return { code: 400, result: 'Usuário ou senha inválida.' };
      });
  }

  async getById(id: string, token: string) {
    try {
      jwtVerify(token);
    } catch (error: any) {
      return { code: 401, result: error.message };
    }
    return await knex('Users')
      .where('id', id)
      .then((result: Array<User>) => {
        const [userResult] = result;
        if (!userResult) throw new Error('Usuário não existe.');
        return {
          code: 200,
          result: {
            id: userResult.id,
            name: userResult.name,
            email: userResult.email,
          },
        };
      })
      .catch((error) => {
        return { code: 404, result: error.message };
      });
  }

  async profile(token: string) {
    try {
      const payload = jwtVerify(token) as User;
      return {
        code: 200,
        result: { id: payload.id, name: payload.name, email: payload.email },
      };
    } catch (error: any) {
      return { code: 401, result: error.message };
    }
  }
}
