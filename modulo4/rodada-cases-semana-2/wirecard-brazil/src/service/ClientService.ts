import Client from '../model/Client';
import clientRepository from '../repository/clientRepository';
import { Repository } from 'typeorm';
import { jwtSign } from '../utils/jwtUtil';

export default class ClientService {
  private repository: Repository<Client>;

  constructor() {
    this.repository = clientRepository;
  }

  async save(client: Client) {
    return await this.repository
      .save(client)
      .then((client: Client) => {
        return {
          code: 201,
          result: client,
        };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }

  async findById(id: string) {
    return await this.repository
      .findOne({ where: { id: id }, relations: { payment: true } })
      .then((client) => {
        if (!client) throw new Error('Cliente não existe');
        return {
          code: 200,
          result: client,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.message };
      });
  }

  async getClientToken(id: string) {
    return await this.repository
      .findOne({ where: { id: id } })
      .then((client) => {
        if (!client) throw new Error('Cliente não existe');
        return {
          code: 200,
          result: jwtSign(client),
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.message };
      });
  }
}
