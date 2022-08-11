import { Request, Response } from 'express';
import { toDosData } from '../../data';

export default class ToDoController {
  get(request: Request, response: Response) {
    return response.status(200).send(toDosData);
  }
  post(request: Request, response: Response) {
    toDosData.push(request.body);
    return response.status(201).send(toDosData);
  }
  getByStatus(request: Request, response: Response) {
    const completed = request.params.completed;
    return response
      .status(200)
      .send(toDosData.filter((toDo) => String(toDo.completed) === completed));
  }
  getByUser(request: Request, response: Response) {
    const id = request.params.id;
    return response
      .status(200)
      .send(toDosData.filter((toDo) => String(toDo.userId) === id));
  }

  putStatus(request: Request, response: Response) {
    const id = request.params.id;
    const completed = request.body.completed;

    toDosData.forEach((toDo) => {
      if (String(toDo.id) === id) toDo.completed = completed;
    });
    return response.status(200).send(toDosData);
  }

  delete(request: Request, response: Response) {
    const id = request.params.id;

    toDosData.forEach((toDo, index) => {
      if (String(toDo.id) == id) delete toDosData[index];
    });

    return response.status(200).send(toDosData);
  }
}
