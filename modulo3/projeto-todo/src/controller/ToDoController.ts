import { Request, Response } from 'express';
import { knex } from '../config/connection';

export default class ToDoController {
  async get(request: Request, response: Response) {
    const id = request.params.id;
    return response.status(200).json('to-do');
  }
}
