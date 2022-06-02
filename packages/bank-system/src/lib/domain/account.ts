import { DummyInterestRate } from './../states/interest-rate/interest-rate.state';
import { Identificable } from './../interfaces/identificable.interface';
import { AccountInterface } from './../interfaces/account.interface';
import {
  InterestRate,
  Product,
} from '../states/interest-rate/interest-rate.interface';

export class Account implements AccountInterface, Product {
  private interestRate = new DummyInterestRate();
  constructor(private balance: number, public id: string) {}

  setInterestRate = (interestRate: InterestRate) => {
    this.interestRate = interestRate;
  };

  addMoney = (amount: number) => {
    this.balance += amount;
  };

  subMoney = (amount: number) => {
    this.balance -= amount;
  };

  getBalance = () => this.interestRate.calculateInterestRate(this.balance);
}
