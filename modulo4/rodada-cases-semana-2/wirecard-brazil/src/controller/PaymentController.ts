import { Request, Response } from 'express';
import Payment from '../model/Payment';
import PaymentService from '../service/PaymentService';

export default class PaymentController {
  private service: PaymentService;

  constructor() {
    this.service = new PaymentService();
  }

  save = async (request: Request, response: Response) => {
    const authorization = request.headers.authorization as string;
    const payment: Payment = request.body;
    const { code, result } = await this.service.save(payment, authorization);

    return response.status(code).json(result);
  };
}
