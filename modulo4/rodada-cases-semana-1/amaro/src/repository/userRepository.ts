import DB from '../config/connection';
import Product from '../model/Product';

const userRepository = DB.getRepository(Product);

export default userRepository;
