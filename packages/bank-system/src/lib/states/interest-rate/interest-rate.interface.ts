import { Transferable } from '../../interfaces/transferable.interface';
export interface Product extends Pick<Transferable, 'getBalance'> {
  setInterestRate: (interestRate: InterestRate) => void;
}

export interface InterestRate {
  calculateInterestRate: (balance: number) => number;
}
