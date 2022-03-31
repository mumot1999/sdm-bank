import { Operation } from './Operation';
import { Transaction } from './Transaction';

export interface IProduct {
  id: string;
  balance: number;
  dateOfOpenning: Date;
  transactions: Transaction[];
  operations: Operation[];
}
