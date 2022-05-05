import { Loan } from './../src/lib/Loan';
import { Account } from '../src';

describe('Loan', () => {
  let account: Account;
  beforeEach(() => {
    account = new Account('1', 1000, new Date());
  });

  test('should store operation when sending money', () => {
    account.payOffLoan()
  });
});
