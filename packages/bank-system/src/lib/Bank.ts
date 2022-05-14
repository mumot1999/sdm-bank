import { Deposit } from './Deposit';
import { Loan } from './Loan';
import { Account } from './Account';
import { InterestRate } from './InterestRate';
import { Mediator } from './InterbankPaymentAgency';

export type DefaultInterestRatesBuilders = {
  loan: (account: Account, loan: Loan) => InterestRate;
  account: (account: Account) => InterestRate;
  deposit: (account: Account, deposit: Deposit) => InterestRate;
};

export class Bank {
  protected mediator: Mediator ;
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
    defaults?: Partial<DefaultInterestRatesBuilders>,
    mediator?: Mediator
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
    this.mediator = mediator!;
  }


  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
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
      (loan) =>
        interestRate ?? this.defaultInterestRatesBuilders.loan(account, loan)
    );

    this.loans.push(loan);
    account.addLoan(loan);
    account.receive(loanBalance);
    loan.payoff(loanBalance)

    return loan;
  }

  createAccount(balance: number) {
    const account = new Account(
      'a' + new Date().getTime() + Math.random(),
      balance,
      new Date()
    );

    this.accounts.push(account);
    return account;
  }
}
