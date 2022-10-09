import { jwtSign, jwtVerify } from '../utils/jwtUtil';
import { bcryptCompare, bcryptHash } from '../utils/bcryptUtil';
import Product from '../model/Product';
import DB from '../config/connection';
import { Repository } from 'typeorm';

export default class UserService {
  private repository: Repository<Product> = DB.getRepository(Product);

  async save(product: Product) {
    return await this.repository
      .save(product)
      .then(() => {
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error: any) => {
        return { code: 400, result: error?.sqlMessage + error.message };
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
      .catch((error: any) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async findByName(name: string) {
    return await this.repository
      .findOneBy({ name: name })
      .then((product) => {
        if (!product) throw new Error('Produto não existe');
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error: any) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async findAll() {
    return await this.repository
      .find()
      .then((result) => {
        return {
          code: 201,
          result: result,
        };
      })
      .catch((error: any) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }
}
