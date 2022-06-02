import { Deposit } from './Deposit';
import { IProduct } from './IProduct';
import { Loan } from './Loan';
import { Operation } from './Operation';
import { Transaction } from './Transaction';
import {IState} from "./IState";

export class Account implements IProduct {
  payOffLoan(loan: Loan, amount?: number) {
    const payoffAmount = amount ?? loan.getAmountToPayoff();
    this._balance -= payoffAmount;
    loan.receive(payoffAmount)
  }
  receiveDeposit(deposit : Deposit, interest: number):number {
    const aux = deposit.balance * interest;
    this._balance += aux;
    return this._balance;
  }
  
  addDeposit(deposit: Deposit): void {
    this._deposits.push(deposit);
  }
  addLoan(loan: Loan) {
    this._loans.push(loan);
  }

  private _loans: Loan[] = [];
  private _deposits: Deposit[] = [];
  private state: IState;

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
    protected _dateOfOpenning: Date,
    state: IState
  ) {
    this.state = state;
  }

  get State(): IState {
    return this.state;
  }

  set State(state: IState) {
      this.state = state;
  }

  public request(): Number {
      console.log("Interest is being called!");
      return this.state.CalculateInterest(this);
  }
  public changeState(): void {
    console.log("ChangeState is being called!");
    this.state.ChangeState(this);
}

  public receive(income: number) {
    this._balance += income;
  }

  public transfer(outcome: number) {
    this._balance -= outcome;
  }
}
