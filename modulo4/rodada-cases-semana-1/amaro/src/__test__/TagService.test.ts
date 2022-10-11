import Tag from '../model/Tag';
import tagRepository from '../repository/tagRepository';
import TagService from '../service/TagService';

describe('TagService', () => {
  it('Should service save tag', async () => {
    const service = new TagService();
    const tag: Tag = {
      id: '',
      name: 'Tag 1',
    };
    jest.spyOn(tagRepository, 'save').mockResolvedValue(tag);

    const { result } = await service.save(tag);

    expect(result).toBe(tag);
  });

  it('Should service return error message when try save', async () => {
    const service = new TagService();
    const tag: Tag = {
      id: '',
      name: 'Tag 1',
    };
    jest
      .spyOn(tagRepository, 'save')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.save(tag);

    expect(result).toBe('error message');
  });

  it('Should service find all products', async () => {
    const service = new TagService();
    const tag: Tag = {
      id: '',
      name: 'Tag 1',
    };
    jest.spyOn(tagRepository, 'find').mockResolvedValue([tag]);

    const { result } = await service.findAll();

    expect(result).toStrictEqual([tag]);
  });

  it('Should service return error message when find all is called', async () => {
    const service = new TagService();
    const tag: Tag = {
      id: '',
      name: 'Tag 1',
    };
    jest
      .spyOn(tagRepository, 'find')
      .mockRejectedValue(new Error('error message'));

    const { result } = await service.findAll();

    expect(result).toBe('error message');
  });
});
