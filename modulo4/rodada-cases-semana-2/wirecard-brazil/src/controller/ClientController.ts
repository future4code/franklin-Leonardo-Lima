import { Request, Response } from 'express';
import Client from '../model/Client';
import ClientService from '../service/ClientService';

export default class ClientController {
  private service: ClientService;

  constructor() {
    this.service = new ClientService();
  }

  save = async (request: Request, response: Response) => {
    const client: Client = request.body;
    const { code, result } = await this.service.save(client);

    return response.status(code).json(result);
  };

  findById = async (request: Request, response: Response) => {
    const id = request.params.id;
    const { code, result } = await this.service.findById(id);

    return response.status(code).json(result);
  };

  getClientToken = async (request: Request, response: Response) => {
    const id = request.params.id;
    const { code, result } = await this.service.getClientToken(id);

    return response.status(code).json(result);
  };
}
