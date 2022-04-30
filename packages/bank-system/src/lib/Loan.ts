import { Account } from './Account';
import { InterestRate } from './InterestRate';
import { IProduct } from './IProduct';
import { Operation } from './Operation';
import { Transaction } from './Transaction';

export class Loan implements IProduct {
  private _interestRate: InterestRate;
  private _balance: number;
  private _operations: Operation[];
  private _transactions: Transaction[];
  public get dateOfOpenning(): Date {
    return this._dateOfOpenning;
  }

  public get balance(): number {
    return this._balance;
  }

  public get id(): string {
    return this._id;
  }

  public get operations(): Operation[] {
    return [...this._operations];
  }

  public get transactions(): Transaction[] {
    return [...this._transactions];
  }

  constructor(
    private _id: string,
    readonly openBalance: number,
    private _dateOfOpenning: Date,
    private _account: Account,
    interestRateBuilder: (selfw: Loan) => InterestRate
  ) {
    this._interestRate = interestRateBuilder(this);
    this._balance = openBalance;
    this._operations = []
    this._transactions = []
  }

  getAmountToPayoff() {
    return this._interestRate.calculate() - this.balance;
  }

  payoff(amount: number) {
    this._balance -= amount;
    this._operations.push(new Operation(`Payoff ${amount}`))
    this._transactions.push(new Transaction("send", new Date(), `payoff ${amount}`))
  }

  receive(amount: number) {
    this._balance += amount;
  }
}
