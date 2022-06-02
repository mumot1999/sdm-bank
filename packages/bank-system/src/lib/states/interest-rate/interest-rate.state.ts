import { InterestRate, Product } from './interest-rate.interface';

export class LineralInterestRate implements InterestRate {
  constructor(private rate: number) {}

  calculateInterestRate = (balance: number) => {
    return balance * this.rate;
  };
}

export class DummyInterestRate implements InterestRate {
  calculateInterestRate = (balance: number) => balance;
}
