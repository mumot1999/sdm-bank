import { Transferable } from '../../interfaces/transferable.interface';
import { Command } from '../command';
export class TransferCommand implements Command {
  constructor(
    private accountA: Transferable,
    private accountB: Transferable,
    private amount: number
  ) {}

  execute = () => {
    if (this.accountA && this.accountB) {
      this.accountA.subMoney(this.amount);
      this.accountB.addMoney(this.amount);
    }
  };
}
