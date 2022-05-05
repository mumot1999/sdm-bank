import { Bank, Product } from '@sdm-bank/bank-system';

describe('product', () => {
  let bank: Bank;
  let productA: Product;
  let productB: Product;

  beforeEach(() => {
    bank = new Bank('bank', '1');
    productA = bank.createAccount(1000);
    productB = bank.createAccount(1000);
  });

  test('should send money', () => {
    productA.sendMoney(10, productB);

    expect(productA.balance).toBe(990);
  });

  test('should receive money', () => {
    productA.receiveMoney(10, productB);

    expect(productA.balance).toBe(1010);
  });

  test('should get operation history', () => {
    productA.receiveMoney(10, productB);

    expect(productA.operations.length).toBe(1);
  });

  test('should get transaction history', () => {
    productA.receiveMoney(10, productB);

    expect(productA.transactions.length).toBe(1);
  });
});
