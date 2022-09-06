import { Request, Response } from 'express';
import { knex } from '../config/connection';
import ToDo from '../model/ToDo';
import { dateFormat } from '../utils/dateFormat';

export default class ToDoController {
  async post(request: Request, response: Response) {
    const { title, description, limitDate, userId } = request.body;
    return response.status(201).json(
      await knex('Tasks').insert({
        title: title,
        description: description,
        limit_date: dateFormat(limitDate),
        user_id: userId,
      })
    );
  }

  async update(request: Request, response: Response) {
    const id = request.params.id;
    const task = request.body;
    return response.status(200).json(
      await knex('Tasks')
        .where('id', id)
        .update({
          title: task.title,
          description: task.description,
          limit_date: dateFormat(task.limitDate),
          user_id: task.userId,
        })
    );
  }

  async getAll(request: Request, response: Response) {
    return response.status(200).json(await knex('Tasks'));
  }

  async getById(request: Request, response: Response) {
    const id = request.params.id;
    await knex('Tasks')
      .where('id', id)
      .then((result: Array<ToDo>) => {
        const task = result[0];
        return response.status(200).json({
          id: task.id,
          title: task.title,
          description: task.description,
          limitDate: task.limit_date.toLocaleDateString('br'),
          userId: task.user_id,
        });
      });
  }
}
