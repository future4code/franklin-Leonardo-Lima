import { Request, Response } from 'express';
import UserService from '../service/UserService';
import UserLogin from '../types/UserLogin';
import UserSignup from '../types/UserSignup';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  signup = async (request: Request, response: Response) => {
    const body: UserSignup = request.body;
    const { code, result } = await this.service.signup(body);

    return response.status(code).json(result);
  };

  login = async (request: Request, response: Response) => {
    // const token = request.headers.authorization as string;
    const body: UserLogin = request.body;
    const { code, result } = await this.service.login(body);

    return response.status(code).json(result);
  };
}
