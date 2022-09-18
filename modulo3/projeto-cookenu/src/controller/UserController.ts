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
    const body: UserLogin = request.body;
    const { code, result } = await this.service.login(body);

    return response.status(code).json(result);
  };

  getById = async (request: Request, response: Response) => {
    const token = request.headers.authorization as string;
    const id = request.params.id
    const { code, result } = await this.service.getById(id, token);

    return response.status(code).json(result);
  };

  profile = async (request: Request, response: Response) => {
    const token = request.headers.authorization as string;
    const { code, result } = await this.service.profile(token);

    return response.status(code).json(result);
  };
}
