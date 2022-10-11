import DB from '../config/connection';
import Tag from '../model/Tag';

const tagRepository = DB.getRepository(Tag);

export default tagRepository;
