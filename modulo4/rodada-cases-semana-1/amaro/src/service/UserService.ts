import { knex } from '../config/connection';
import { v4 as uuid } from 'uuid';
import { jwtSign, jwtVerify } from '../utils/jwtUtil';
import { bcryptCompare, bcryptHash } from '../utils/bcryptUtil';
import Product from '../model/Product';

export default class UserService {
  async save(product: Product) {
    product.id = uuid();
    return await knex('Products')
      .insert(product)
      .then(() => {
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async findById(id: string) {
    return await knex('Products')
      .where('id', id)
      .then((result: Array<Product>) => {
        const [product] = result;
        if (!product) throw new Error('Produto não existe');
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async findByName(name: string) {
    return await knex('Products')
      .where('name', name)
      .then((result: Array<Product>) => {
        const [product] = result;
        if (!product) throw new Error('Produto não existe');
        return {
          code: 201,
          result: product,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }

  async findAll() {
    return await knex('Products')
      .then((result: Array<Product>) => {
        return {
          code: 201,
          result: result,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }
}
