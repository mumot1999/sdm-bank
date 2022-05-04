import { Account } from '../src/lib/Account';
import { Bank } from '../src/lib/Bank';
import { Deposit } from '../src/lib/Deposit';

describe('Bank system - deposit', () => {
  it('Account transfer funds to the bank when is created', () => {
    const bank = new Bank('bank', '1');
    const account1 = new Account('1', 1000, new Date());
    const deposit1 = new Deposit('1', 10, new Date());
    bank.addAccount(account1);
    bank.createDeposit(deposit1 , account1);
 

    expect(account1.balance).toBe(990);
  });

  describe('payoff', () => {
    it('account receive the amount of the deposit with the interest', () => {
     
      const bank = new Bank('bank', '1');
      const account1 = new Account('1', 1000, new Date());
      const deposit1 = new Deposit('1', 10, new Date());

      bank.addAccount(account1);
      bank.createDeposit(deposit1 , account1);
      account1.receiveDeposit(deposit1 , 1.05);
      expect(account1.balance).toBe(1000 + (10*1.05));
    });

    it('if the money of the deposit is withrawn', () => {
        const bank = new Bank('bank', '1');
        const account1 = new Account('1', 1000, new Date());
        const deposit1 = new Deposit('1', 10, new Date());
  
        bank.addAccount(account1);
        bank.createDeposit(deposit1 , account1);
        account1.receiveDeposit(deposit1 , 1);
        expect(account1.balance).toBe(1000 + (10 * 1));
    });
  });
});
