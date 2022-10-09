import { Request, Response } from 'express';
import Tag from '../model/Tag';
import TagService from '../service/TagService';

export default class TagController {
  private service: TagService;

  constructor() {
    this.service = new TagService();
  }

  save = async (request: Request, response: Response) => {
    const tag: Tag = request.body;
    const { code, result } = await this.service.save(tag);

    return response.status(code).json(result);
  };

  findAll = async (request: Request, response: Response) => {
    const { code, result } = await this.service.findAll();

    return response.status(code).json(result);
  }
}
