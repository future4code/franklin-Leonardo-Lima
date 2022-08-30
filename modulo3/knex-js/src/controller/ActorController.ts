import { Request, Response } from 'express';
import { knex } from '../config/connection';

export default class ActorController {
  async createActor(request: Request, response: Response) {
    const { id, name, salary, gender, birthDate } = request.body;
    await knex('Actor').insert({
      id: id,
      name: name,
      salary: salary,
      gender: gender,
      birth_date: birthDate,
    });
    return response.status(200).json(await knex('Actor').where('id', id));
  }

  async getById(request: Request, response: Response) {
    const id = request.params.id;
    return response.status(200).json(await knex('Actor').where('id', id));
  }

  async getByName(request: Request, response: Response) {
    const name = request.params.name;
    return response.status(200).json(await knex('Actor').where('name', name));
  }

  async countByGender(request: Request, response: Response) {
    const gender = request.query.gender as string;
    console.log(gender);
    return response
      .status(200)
      .json(await knex('Actor').count({ count: '*' }).where('gender', gender));
  }

  async updateSalaryById(request: Request, response: Response) {
    const { id, salary } = request.body;
    await knex('Actor')
      .update({
        salary: salary,
      })
      .where('id', id);
    return response.status(200).json(await knex('Actor').where('id', id));
  }

  async deleteActor(request: Request, response: Response) {
    const id = request.params.id;
    await knex('Actor').delete().where('id', id);
    return response.status(200).end();
  }

  async avgSalaryByGender(request: Request, response: Response) {
    const gender = request.params.gender;
    return response
      .status(200)
      .json(await knex('Actor').avg('salary as average').where({ gender }));
  }
}
