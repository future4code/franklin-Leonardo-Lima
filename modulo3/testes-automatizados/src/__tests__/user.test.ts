import { describe, expect, it } from '@jest/globals';
import { performPurchase } from '../user';

describe('user module', () => {
  it('should user balance to be 25', () => {
    const user = performPurchase({ name: 'leonardo', balance: 100 }, 25);

    expect(user?.balance).toBe(75);
  });

  it('should user balance to be 0', () => {
    const user = performPurchase({ name: 'leonardo', balance: 100 }, 100);

    expect(user?.balance).toBe(0);
  });

  it('should user to be undefined when user balance less than value', () => {
    const user = performPurchase({ name: 'leonardo', balance: 25 }, 100);

    expect(user).toBe(undefined);
  });
});
