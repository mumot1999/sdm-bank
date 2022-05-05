import { Bank } from '@sdm-bank/bank-system';

describe('bank', () => {
  let bank: Bank;

  beforeEach(() => {
    bank = new Bank('bank', '1');
  });

  test('should create account', () => {
    bank.createAccount(1000);

    expect(bank.accounts.length).toBe(1);
  });

  test('should create loan', () => {
    const account = bank.createAccount(1000);
    const loan = bank.createLoan(10, account);

    expect(bank.loans.length).toBe(1);
  });

  test('should create deposit', () => {
    const account = bank.createAccount(1000);
    const deposit = bank.createDeposit(10, account);

    expect(bank.deposits.length).toBe(1);
  });
  
});
