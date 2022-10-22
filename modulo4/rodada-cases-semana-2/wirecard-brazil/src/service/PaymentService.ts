import { Repository } from 'typeorm';
import Payment from '../model/Payment';
import paymentRepository from '../repository/paymentRepository';
import { jwtVerify } from '../utils/jwtUtil';

export default class PaymentService {
  private repository: Repository<Payment>;

  constructor() {
    this.repository = paymentRepository;
  }

  async save(payment: Payment, authorization: string) {
    try {
      jwtVerify(authorization);
    } catch (error: any) {
      return { code: 401, result: error.message };
    }
    return await this.repository
      .save(payment)
      .then((payment: Payment) => {
        return {
          code: 201,
          result: payment,
        };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }
}
