import { Deposit } from './Deposit';
import { Loan } from './Loan';
import { Account } from './Account';
import { InterestRate } from './InterestRate';

export type DefaultInterestRatesBuilders = {
  loan: (account: Account, loan: Loan) => InterestRate;
  account: (account: Account) => InterestRate;
  deposit: (account: Account, deposit: Deposit) => InterestRate;
};

export class Bank {
  private accounts: Account[] = [];
  private loans: Loan[] = [];
  private deposits: Deposit[] = [];
  private defaultInterestRatesBuilders: DefaultInterestRatesBuilders;

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  constructor(
    private _name: string,
    private _id: string,
    defaults?: Partial<DefaultInterestRatesBuilders>
  ) {
    this.defaultInterestRatesBuilders = {
      account:
        defaults?.account ??
        ((a) => ({
          calculate: () => a.balance,
        })),
      loan:
        defaults?.loan ?? ((a, l) => ({ calculate: () => l.balance * 1.05 })),
      deposit:
        defaults?.deposit ??
        ((a, d) => ({ calculate: () => d.balance * 1.05 })),
    };
  }

  public addAccount(account: Account) {
    this.accounts.push(account);
  }

  public createDeposit(deposit: Deposit, account: Account) {
    this.deposits.push(deposit);
    account.addDeposit(deposit);
  }

  public createLoan(
    loanBalance: number,
    account: Account,
    interestRate?: InterestRate
  ) {
    const loan = new Loan(
      (this.loans.length + 1).toString(),
      loanBalance,
      new Date(),
      account,
      (loan) => interestRate ?? this.defaultInterestRatesBuilders.loan(account, loan)
    );

    this.loans.push(loan);
    account.addLoan(loan);
    account.receive(loanBalance);

    return loan;
  }
}
