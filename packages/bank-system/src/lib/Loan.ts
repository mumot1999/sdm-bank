import { Account } from './Account';
import { IProduct } from './IProduct';
import { Operation } from './Operation';
import { Transaction } from './Transaction';

export class Loan implements IProduct {
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
    return [];
  }

  public get transactions(): Transaction[] {
    return [];
  }

  constructor(
    private _id: string,
    private _balance: number,
    private _dateOfOpenning: Date,
    private _account: Account
  ) {}

  payoff(amount: number) {
    this._balance -= amount;
  }
}
