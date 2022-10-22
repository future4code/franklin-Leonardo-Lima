import DB from '../config/connection';
import Payment from '../model/Payment';

const paymentRepository = DB.getRepository(Payment);

export default paymentRepository;
