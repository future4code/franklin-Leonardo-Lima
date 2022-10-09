import { jwtSign, jwtVerify } from '../utils/jwtUtil';
import { bcryptCompare, bcryptHash } from '../utils/bcryptUtil';
import Product from '../model/Product';
import userRepository from '../repository/userRepository';
import { Repository } from 'typeorm';

export default class ProductService {
  private repository: Repository<Product>

  constructor() {
    this.repository  = userRepository;
  }

  async save(product: Product) {
    return await this.repository
      .save(product)
      .then((product) => {
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }

  async findById(id: string) {
    return await this.repository
      .findOne({where: { id: id }, relations: {tags: true}})
      .then((product) => {
        if (!product) throw new Error('Produto não existe');
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.message };
      });
  }

  async findByName(name: string) {
    return await this.repository
    .findOne({where: { name: name }, relations: {tags: true}})
      .then((product) => {
        if (!product) throw new Error('Produto não existe');
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.message };
      });
  }

  async findAll() {
    return await this.repository
      .find({relations: {tags: true}})
      .then((result) => {
        return {
          code: 201,
          result: result,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.message };
      });
  }
}
