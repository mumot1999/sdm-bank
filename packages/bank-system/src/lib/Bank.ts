import { Identificable } from './interfaces/identificable.interface';
import { AccountInterface } from './interfaces/account.interface';
import { TransferInvoker } from './commands/account/transfer.invoker';
import { Deposit } from './Deposit';
import { Loan } from './Loan';
import { InterestRate } from './InterestRate';
import { TransferCommand } from './commands/account/transfer.command';
import { Account } from './domain/account';

export type DefaultInterestRatesBuilders = {
  loan: (account: Account, loan: Loan) => InterestRate;
  account: (account: Account) => InterestRate;
  deposit: (account: Account, deposit: Deposit) => InterestRate;
};

export class Bank {
  transferFunds(accountA: string, accountB: string, amount: number) {
    this.transferInvoker.dispatch(
      new TransferCommand(accountA, accountB, amount)
    );
  }

  private accounts: Identificable<AccountInterface>[] = [];
  private loans: Loan[] = [];
  private deposits: Deposit[] = [];
  private defaultInterestRatesBuilders: DefaultInterestRatesBuilders;
  private transferInvoker!: TransferInvoker;

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
          calculate: () => a.getBalance(),
        })),
      loan:
        defaults?.loan ?? ((a, l) => ({ calculate: () => l.balance * 1.05 })),
      deposit:
        defaults?.deposit ??
        ((a, d) => ({ calculate: () => d.balance * 1.05 })),
    };
    this.transferInvoker = new TransferInvoker(this.accounts);
  }

  public addAccount(account: Identificable<AccountInterface>) {
    this.accounts.push(account);
  }

  createAccount(balance: number) {
    const id = 'a' + Math.random();
    const account = new Account(balance, id);

    this.accounts.push(account);
    return account;
  }
}
