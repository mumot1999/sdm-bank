import { Bank, Account } from '@sdm-bank/bank-system';

describe('account', () => {
  let bank: Bank;
  let account: Account
  beforeEach(() => {
    bank = new Bank('bank', '1');
    account = bank.createAccount(1000)
  });

  test('should payoff loan', () => {
    const loan = bank.createLoan(10, account)

    account.payOffLoan(loan)

    expect(account.balance).toBeLessThanOrEqual(1000)
  });

  test('should get all loans', () => {
    type Loan = {amountToPay: number, dueDate: Date}
    
    const loan1 = bank.createLoan(10, account)
    const loan2 = bank.createLoan(100, account)

    account.payOffLoan(loan1)

    const loans: Loan[] = account.getLoans()

    expect(loans.length).toBe(2)
    expect(loans[0].amountToPay).toBe(0)
    expect(loans[1].amountToPay).toBe(100)
  });

  test('should get all deposits', () => {
    type Deposit = {amountToWithdraw: number, dueDate: Date}
    
    const deposit = bank.createDeposit(10, account)

    const deposits: Deposit[] = account.getDeposits()

    expect(deposits.length).toBe(1)
    expect(deposits[0].amountToWithdraw).toBe(10)
  });
 
});
