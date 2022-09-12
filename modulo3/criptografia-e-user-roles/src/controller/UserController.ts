import { user } from '../types/types';
import { Request, Response } from 'express';
import service from '../service/UserService';

export default class UserController {
  async createUser(request: Request, response: Response) {
    const { email, password, role } = request.body as unknown as user;
    const { code, result } = await service.createUser(email, password, role);

    response.status(code).json(result);
  }

  async getUserBYEmail(request: Request, response: Response) {
    const { email, password, role } = request.body as unknown as user;
    const { code, result } = await service.getUserByEmail(email, password, role);

    response.status(code).json(result);
  }
  async getUserById(request: Request, response: Response) {
    const token = request.headers.authorization as string;
    const { code, result } = await service.getUserById(token);

    response.status(code).json(result);
  }
}
