import { Identificable } from './../interfaces/identificable.interface';
import { AccountInterface } from './../interfaces/account.interface';

export class Account implements AccountInterface {
  constructor(private balance: number, public id: string) {}

  addMoney = (amount: number) => {
    this.balance += amount;
  };

  subMoney = (amount: number) => {
    this.balance -= amount;
  };

  getBalance = () => this.balance;
}
