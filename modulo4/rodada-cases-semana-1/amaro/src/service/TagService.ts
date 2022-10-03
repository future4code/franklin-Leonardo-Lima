import { knex } from '../config/connection';
import { v4 as uuid } from 'uuid';
import Tag from '../model/Tag';

export default class TagService {
  async save(tag: Tag) {
    tag.id = uuid();
    return await knex('Tags')
      .insert(tag)
      .then(() => {
        return {
          code: 201,
          result: tag,
        };
      })
      .catch((error) => {
        return { code: 400, result: error?.sqlMessage };
      });
  }
}
