import { Bank, Account } from '@sdm-bank/bank-system';

describe('transfer funds', () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank('bank', '1');
  });
  test('should work', () => {
    const accountA = new Account(100, 'a');
    const accountB = new Account(100, 'b');

    bank.addAccount(accountA);
    bank.addAccount(accountB);

    bank.transferFunds('a', 'b', 20);

    expect(accountA.getBalance()).toEqual(80);
    expect(accountB.getBalance()).toEqual(120);
  });
});
