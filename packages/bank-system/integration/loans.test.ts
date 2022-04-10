import { Account } from '../src/lib/Account';
import { Bank } from '../src/lib/Bank';

describe('Bank system - loans', () => {
  it('bank should transfer funds to account when the loan is created', () => {
    const bank = new Bank('bank', '1');
    const account1 = new Account('1', 1000, new Date());
    bank.addAccount(account1);
    bank.createLoan(10, account1);

    expect(account1.balance).toBe(1010);
  });

  describe('payoff', () => {
    it('account gets loan for 10 and payoffs 20', () => {
      const bank = new Bank('bank', '1');
      const account1 = bank.createAccount(1000);
      const loan = bank.createLoan(10, account1, { calculate: () => 20 });

      account1.payOffLoan(loan);

      expect(account1.balance).toBe(990);
    });

    it('bank creates loan which payoff amount is (loan.balance + 2)', () => {
      const bank = new Bank('bank', '1', {
        loan: (_, loan) => ({ calculate: () => loan.openBalance + 2 }),
      });
      const account = bank.createAccount(1000);
      const loan = bank.createLoan(10, account);

      expect(loan.getAmountToPayoff()).toBe(12);
    });

    it('should be able to payoff the loan in parts', () => {
      const bank = new Bank('bank', '1', {
        loan: (_, loan) => ({ calculate: () => loan.openBalance + 2 }),
      });
      const account = bank.createAccount(1000);
      const loan = bank.createLoan(10, account);

      account.payOffLoan(loan, 5);

      expect(account.balance).toBe(1005);
      // (10 + 2) - 5 = 7
      expect(loan.getAmountToPayoff()).toBe(7);
    });
  });
});
