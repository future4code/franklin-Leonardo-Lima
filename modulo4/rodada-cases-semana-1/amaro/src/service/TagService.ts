import { Repository } from 'typeorm';
import DB from '../config/connection';
import Tag from '../model/Tag';

export default class TagService {
  private repository: Repository<Tag> = DB.getRepository(Tag);

  async save(tag: Tag) {
    return await this.repository
      .save(tag)
      .then(() => {
        return {
          code: 201,
          result: tag,
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
