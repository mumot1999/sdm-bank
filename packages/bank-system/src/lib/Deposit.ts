import { IProduct } from './IProduct';
import { Operation } from './Operation';
import { Transaction } from './Transaction';

export class Deposit implements IProduct {
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
    private _dateOfOpenning: Date
  ) {}

  public withdraw() {
    this._balance = 0;
  }
}
