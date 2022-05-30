import { Identificable } from './identificable.interface';
export type AccountInterface = Identificable<{
  addMoney: (amount: number) => void;
  subMoney: (amount: number) => void;
  getBalance: () => number;
}>;
