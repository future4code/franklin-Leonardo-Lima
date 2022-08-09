import { Request, Response } from 'express';
import { usersData } from '../../data';

export default class UserController {
  get(request: Request, response: Response) {
    return response.status(200).send(usersData);
  }
}
