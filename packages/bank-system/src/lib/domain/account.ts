import { AccountInterface } from './../interfaces/account.interface';

export class Account implements AccountInterface {
  constructor(private balance: number) {}

  addMoney = (amount: number) => {
    this.balance += amount;
  };

  subMoney = (amount: number) => {
    this.balance -= amount;
  };

  getBalance = () => this.balance;
}
