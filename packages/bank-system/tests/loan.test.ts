import { Loan, Account } from '../src';

describe('Loan', () => {
  let loan: Loan;
  beforeEach(() => {
    const account = new Account('1', 1000, new Date());
    loan = new Loan('1', 1000, new Date(), account, (l) => ({
      calculate: () => l.openBalance * 1.2,
    }));
  });

  test('should store operation when sending money', () => {
    loan.payoff(1000);

    expect(loan.operations.length).toBe(1);
  });
});
