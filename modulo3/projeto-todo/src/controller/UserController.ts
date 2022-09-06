import { Request, Response } from 'express';
import { knex } from '../config/connection';

export default class UserController {
  async post(request: Request, response: Response) {
    const user = request.body;
    return response.status(201).json(await knex('Users').insert(user));
  }

  async update(request: Request, response: Response) {
    const id = request.params.id;
    const user = request.body;
    return response
      .status(200)
      .json(await knex('Users').where('id', id).update(user));
  }

  async getAll(request: Request, response: Response) {
    return response.status(200).json(await knex('Users'));
  }

  async getById(request: Request, response: Response) {
    const id = request.params.id;
    return response.status(200).json(await knex('Users').where('id', id));
  }
}
