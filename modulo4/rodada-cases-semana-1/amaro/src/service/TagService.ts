import { Repository } from 'typeorm';
import Tag from '../model/Tag';
import tagRepository from '../repository/tagRepository';

export default class TagService {
  private repository: Repository<Tag>

  constructor() {
    this.repository  = tagRepository;
  }

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
        return { code: 400, result: error?.message };
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
        return { code: 400, result: error?.message };
      });
  }
}
