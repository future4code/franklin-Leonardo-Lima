import { knex } from '../config/connection';
import { v4 as uuid } from 'uuid';
import { jwtSign } from '../utils/jwtUtil';
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
        return { code: 201, result: jwtSign({ id: id, email: user.email }) };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async login(user: UserLogin) {
    return await knex('Users')
      .where('email', user.email)
      .then((result: Array<User>) => {
        const [user] = result
        if (!user) throw new Error('Usuário não existe');
        return { code: 200, result: jwtSign({ id: user.id, email: user.email }) };
      })
      .catch((error) => {
        return { code: 404, result: error.message };
      });
  }
}
