import 'dotenv/config';
import Payment from '../model/Payment';
import paymentRepository from '../repository/paymentRepository';
import PaymentService from '../service/PaymentService';
import jwt from 'jsonwebtoken';

describe('PaymentService', () => {
  it('Should service save payment', async () => {
    const service = new PaymentService();
    enum PaymentType {
      'CARD',
      'BOLETO',
    }
    const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const payment: Payment = {
      id: '1',
      amount: 2.25,
      type: PaymentType.BOLETO,
      client: [],
    };
    jest.spyOn(paymentRepository, 'save').mockResolvedValue(payment);
    jest.spyOn(jwt, 'verify').mockReturnValue();

    const { result } = await service.save(payment, token);

    expect(result.id).toBe(payment.id);
  });


  it('Should service not save payment and trow error', async () => {
    const service = new PaymentService();
    enum PaymentType {
      'CARD',
      'BOLETO',
    }
    const token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    const payment: Payment = {
      id: '1',
      amount: 2.25,
      type: PaymentType.BOLETO,
      client: [],
    };
    jest.spyOn(paymentRepository, 'save').mockRejectedValue(new Error('error message'));

    const { result } = await service.save(payment, token);

    expect(result).toBe('error message');
  });
});
