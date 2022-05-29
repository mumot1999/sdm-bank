import { AccountInterface } from '../../interfaces/account.interface';
import { DebitAccount } from './debit-account';

const getAccount = (initBalance = 100): AccountInterface => {
  let balance = initBalance;

  return {
    addMoney: (a) => {
      balance += a;
    },
    getBalance: () => balance,
    subMoney: (n) => (balance -= n),
  };
};

describe('debit account', () => {
  test('should sum all balances', () => {
    const account = new DebitAccount(getAccount(100), 100);

    expect(account.getBalance()).toEqual(200);
  });

  test('should go into debt, when sub more money than main account', () => {
    const account = new DebitAccount(getAccount(0), 100);
    150;
    account.subMoney(50);
    expect(account.getBalance()).toEqual(50);
  });

  test('should throw error when sub money over maximum debit', () => {
    const account = new DebitAccount(getAccount(50), 50);

    expect(() => account.subMoney(120)).toThrow();
  });

  describe('nested 2 levels', () => {
    test('should account with 50+50+50 balance -150 be 0', () => {
      const account = new DebitAccount(
        new DebitAccount(getAccount(50), 50),
        50
      );

      account.subMoney(150);
      expect(account.getBalance()).toEqual(0);
    });
  });
});
