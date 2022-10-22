import DB from '../config/connection';
import Client from '../model/Client';

const clientRepository = DB.getRepository(Client);

export default clientRepository;