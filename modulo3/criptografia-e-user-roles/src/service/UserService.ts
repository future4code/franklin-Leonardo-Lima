import knex from '../config/connection';
import { v4 as uuid } from 'uuid';
import { generateToken, getData } from '../utils/jwt';
import { compare, hash } from '../utils/bcrypt';

const userTableName = 'User';

export default class UserService {
  static async createUser(email: string, password: string, role: string) {
    try {
      if (!email || email.indexOf('@') === -1) {
        throw new Error('Invalid email');
      }

      if (!password || password.length < 6) {
        throw new Error('Invalid password');
      }

      const id = uuid();
      const hashPassword = await hash(password);

      await createUser(id, email, hashPassword, role);

      const token = generateToken({
        id,
        role,
      });

      return { code: 200, result: token };
    } catch (error: any) {
      return { code: 400, result: error.message };
    }
  }

  static async getUserByEmail(email: string, password: string, role: string) {
    try {
      if (!email || email.indexOf('@') === -1) {
        throw new Error('Invalid email');
      }

      const user = await getUserByEmail(email);

      const compareResult = await compare(password, user.password);

      if (!compareResult) {
        throw new Error('Invalid password');
      }

      const token = generateToken({
        id: user.id,
        role: user.role
      });

      return { code: 200, result: token };
    } catch (error: any) {
      return { code: 400, result: error.message };
    }
  }

  static async getUserById(token: string) {
    try {
      const authenticationData = getData(token);
      
      if (authenticationData.role !== "normal") {
        throw new Error("Only a normal user can access this funcionality");
      }

      const user = await getUserById(authenticationData.id);

      return {
        code: 200,
        result: {
          id: user.id,
          email: user.email,
          role: user.role,
        },
      };
    } catch (error: any) {
      return { code: 400, result: error.message };
    }
  }
}

const createUser = async (id: string, email: string, password: string, role: string) => {
  await knex
    .insert({
      id,
      email,
      password,
      role
    })
    .into(userTableName);
};

const getUserByEmail = async (email: string): Promise<any> => {
  const result = await knex.select('*').from(userTableName).where({ email });

  return result[0];
};

const getUserById = async (id: string): Promise<any> => {
  const result = await knex.select('*').from(userTableName).where({ id });

  return result[0];
};
