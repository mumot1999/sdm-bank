import { AccountInterface } from '../../interfaces/account.interface';
import { Identificable } from '../../interfaces/identificable.interface';
import { Command } from '../command';

export type TransferAccount = Identificable<{
  addMoney: (amount: number) => void;
  subMoney: (amount: number) => void;
}>;
export class TransferCommand implements Command {
  private accountA: TransferAccount | undefined;
  private accountB: TransferAccount | undefined;

  constructor(
    private idA: string,
    private idB: string,
    private amount: number
  ) {}

  configure(accounts: TransferAccount[]) {
    this.accountA = accounts.find((account) => account.id === this.idA);
    this.accountB = accounts.find((account) => account.id === this.idB);
  }

  execute = () => {
    if (this.accountA && this.accountB) {
      this.accountA.subMoney(this.amount);
      this.accountB.addMoney(this.amount);
    }
  };
}
