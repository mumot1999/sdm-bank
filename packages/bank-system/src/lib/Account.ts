import { Deposit } from './Deposit';
import { IProduct } from './IProduct';
import { Loan } from './Loan';
import { Operation } from './Operation';
import { Transaction } from './Transaction';

export class Account implements IProduct {
  payOffLoan(loan: Loan, amount?: number) {
    const payoffAmount = amount ?? loan.getAmountToPayoff();
    this._balance -= payoffAmount;
    loan.receive(payoffAmount)
  }

  addDeposit(deposit: Deposit) {
    this._deposits.push(deposit);
  }
  addLoan(loan: Loan) {
    this._loans.push(loan);
  }

  private _loans: Loan[] = [];
  private _deposits: Deposit[] = [];

  public get dateOfOpenning(): Date {
    return this._dateOfOpenning;
  }

  public get balance(): number {
    return this._balance;
  }

  public get id(): string {
    return this._id;
  }

  public get loans() {
    return [...this._loans];
  }

  public get deposits() {
    return [...this._deposits];
  }

  public get operations(): Operation[] {
    return [];
  }

  public get transactions(): Transaction[] {
    return [];
  }

  constructor(
    protected _id: string,
    protected _balance: number,
    protected _dateOfOpenning: Date
  ) {}

  public receive(income: number) {
    this._balance += income;
  }

  public transfer(outcome: number) {
    this._balance -= outcome;
  }
}
