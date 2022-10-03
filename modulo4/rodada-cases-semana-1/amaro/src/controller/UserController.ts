import { Request, Response } from 'express';
import Product from '../model/Product';
import UserService from '../service/UserService';

export default class UserController {
  private service: UserService;

  constructor() {
    this.service = new UserService();
  }

  save = async (request: Request, response: Response) => {
    const product: Product = request.body;
    const { code, result } = await this.service.save(product);

    return response.status(code).json(result);
  };

  findById = async (request: Request, response: Response) => {
    const id = request.params.id;
    const { code, result } = await this.service.findById(id);
    console.log('id');

    return response.status(code).json(result);
  };

  findByName = async (request: Request, response: Response) => {
    const name = request.query.name as string;
    const { code, result } = await this.service.findByName(name);
    console.log('name');
    return response.status(code).json(result);
  };

  findAll = async (request: Request, response: Response) => {
    const { code, result } = await this.service.findAll();

    return response.status(code).json(result);
  };
}
