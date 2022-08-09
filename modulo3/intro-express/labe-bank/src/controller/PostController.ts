import { Request, Response } from 'express';
import { postsData } from '../../data';

export default class PostController {
  get(request: Request, response: Response) {
    return response.status(200).send(postsData);
  }
  getById(request: Request, response: Response) {
    const id = parseInt(request.params.id);
    return response
      .status(200)
      .send(postsData.filter((post) => post.id === id));
  }
}
