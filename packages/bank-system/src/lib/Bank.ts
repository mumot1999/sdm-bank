import { Deposit } from './Deposit';
import { Loan } from './Loan';
import { Account } from './Account';

export class Bank {
  private accounts: Account[] = [];
  private loans: Loan[] = [];
  private deposits: Deposit[] = [];

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  constructor(private _name: string, private _id: string) {}

  public addAccount(account: Account) {
    this.accounts.push(account);
  }

  public createDeposit(deposit: Deposit, account: Account) {
    this.deposits.push(deposit);
    account.addDeposit(deposit);
  }

  public createLoan(loanBalance: number, account: Account) {
    const loan = new Loan(
      (this.loans.length + 1).toString(),
      loanBalance,
      new Date(),
      account
    );

    this.loans.push(loan);
    account.addLoan(loan);
    account.receive(loanBalance);
    
    return loan;
  }
}
