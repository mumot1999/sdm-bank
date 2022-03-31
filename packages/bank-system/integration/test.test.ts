import { Account } from '../src/lib/Account';
import { Bank } from './../src/lib/Bank';

describe('Bank system', () => {
  it('bank should transfer funds to account when the loan is created', () => {
    const bank = new Bank('bank', '1');
    const account1 = new Account('1', 1000, new Date());
    bank.addAccount(account1);
    bank.createLoan(10, account1);

    expect(account1.balance).toBe(1010);
  });
});
