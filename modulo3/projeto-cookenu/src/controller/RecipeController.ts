import { Request, Response } from 'express';
import Recipe from '../model/Recipe';
import RecipeService from '../service/RecipeService';

export default class RecipeController {
  private service: RecipeService;

  constructor() {
    this.service = new RecipeService();
  }

  create = async (request: Request, response: Response) => {
    const token = request.headers.authorization as string;
    const body: Recipe = request.body;
    const { code, result } = await this.service.create(body, token);

    return response.status(code).json(result);
  };

  getById = async (request: Request, response: Response) => {
    const token = request.headers.authorization as string;
    const id = request.params.id;
    const { code, result } = await this.service.getById(id, token);

    return response.status(code).json(result);
  };
}
