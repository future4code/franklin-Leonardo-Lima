import Product from '../model/Product';
import ProductService from '../service/ProductService';
import userRepository from '../repository/userRepository';

describe('ProductService', () => {
  it('Should service save product', async () => {
    const service = new ProductService();
    const product: Product = {
      id: '',
      name: 'Smartphone',
      tags: [],
    };
    jest.spyOn(userRepository, 'save').mockResolvedValue(product);

    const { result } = await service.save(product);

    expect(result).toBe(product);
  });

  it('Should service return error message when try save', async () => {
    const service = new ProductService();
    const product: Product = {
      id: '',
      name: 'Smartphone',
      tags: [],
    };
    jest
      .spyOn(userRepository, 'save')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.save(product);

    expect(result).toBe('error message');
  });

  it('Should service find product By Id', async () => {
    const service = new ProductService();
    const product: Product = {
      id: 'aed-859-ase-987',
      name: 'Smartphone',
      tags: [],
    };
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(product);

    const { result } = await service.findById(product.id);

    expect(result.id).toBe(product.id);
  });

  it('Should service not find product By Id and return error message', async () => {
    const service = new ProductService();
    const product: Product = {
      id: 'aed-859-ase-987',
      name: 'Smartphone',
      tags: [],
    };
    jest
      .spyOn(userRepository, 'findOne')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.findById(product.id);

    expect(result).toBe('error message');
  });

  it('Should service find product By name', async () => {
    const service = new ProductService();
    const product: Product = {
      id: 'aed-859-ase-987',
      name: 'Smartphone',
      tags: [],
    };
    jest.spyOn(userRepository, 'findOne').mockResolvedValue(product);

    const { result } = await service.findByName(product.name);

    expect(result.name).toBe(product.name);
  });

  it('Should service not find product By name and return error message', async () => {
    const service = new ProductService();
    const product: Product = {
      id: 'aed-859-ase-987',
      name: 'Smartphone',
      tags: [],
    };
    jest
      .spyOn(userRepository, 'findOne')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.findByName(product.name);

    expect(result).toBe('error message');
  });

  it('Should service find all products', async () => {
    const service = new ProductService();
    const product: Product = {
      id: 'aed-859-ase-987',
      name: 'Smartphone',
      tags: [],
    };
    jest.spyOn(userRepository, 'find').mockResolvedValue([product]);

    const { result } = await service.findAll();

    expect(result).toStrictEqual([product]);
  });

  it('Should service return error message when find all is called', async () => {
    const service = new ProductService();
    const product: Product = {
      id: 'aed-859-ase-987',
      name: 'Smartphone',
      tags: [],
    };
    jest
      .spyOn(userRepository, 'find')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.findAll();

    expect(result).toBe('error message');
  });
});
