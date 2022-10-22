import 'dotenv/config';
import Client from '../model/Client';
import clientRepository from '../repository/clientRepository';
import ClientService from '../service/ClientService';

describe('ClientService', () => {
  it('Should service save client', async () => {
    const service = new ClientService();
    const client: Client = {
      id: '1',
      name: 'Leonardo Santino',
      email: 'leonardosantino@email.com',
      cpf: '123.456.789-00',
      payment: [],
    };
    jest.spyOn(clientRepository, 'save').mockResolvedValue(client);

    const { result } = await service.save(client);

    expect(result).toBe(client);
  });

  it('Should service return error message when try save', async () => {
    const service = new ClientService();
    const client: Client = {
      id: '1',
      name: 'Leonardo Santino',
      email: 'leonardosantino@email.com',
      cpf: '123.456.789-00',
      payment: [],
    };
    jest
      .spyOn(clientRepository, 'save')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.save(client);

    expect(result).toBe('error message');
  });

  it('Should service find client By Id', async () => {
    const service = new ClientService();
    const client: Client = {
      id: '1',
      name: 'Leonardo Santino',
      email: 'leonardosantino@email.com',
      cpf: '123.456.789-00',
      payment: [],
    };
    jest.spyOn(clientRepository, 'findOne').mockResolvedValue(client);

    const { result } = await service.findById(client.id);

    expect(result.id).toBe(client.id);
  });

  it('Should service not find client By Id and return error message', async () => {
    const service = new ClientService();
    const client: Client = {
      id: '0',
      name: 'Leonardo Santino',
      email: 'leonardosantino@email.com',
      cpf: '123.456.789-00',
      payment: [],
    };
    jest
      .spyOn(clientRepository, 'findOne')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.findById(client.id);

    expect(result).toBe('error message');
  });

  it('Should service get client token by Id', async () => {
    const service = new ClientService();
    const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const client: Client = {
      id: '0',
      name: 'Leonardo Santino',
      email: 'leonardosantino@email.com',
      cpf: '123.456.789-00',
      payment: [],
    };
    jest.spyOn(clientRepository, 'findOne').mockResolvedValue(client);

    const { result } = await service.getClientToken(client.id);

    expect(result).toContain(token);
  });

  it('Should service not get client token by Id', async () => {
    const service = new ClientService();
    const client: Client = {
      id: '0',
      name: 'Leonardo Santino',
      email: 'leonardosantino@email.com',
      cpf: '123.456.789-00',
      payment: [],
    };
    jest.spyOn(clientRepository, 'findOne').mockRejectedValue(new Error('error message'));

    const { result } = await service.getClientToken(client.id);

    expect(result).toBe('error message');
  });
});
