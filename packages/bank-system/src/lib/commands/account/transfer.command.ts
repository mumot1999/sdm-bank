import { AccountInterface } from '../../interfaces/account.interface';
import { Command } from '../command';
export class TransferCommand implements Command {
  private accountA: AccountInterface | undefined;
  private accountB: AccountInterface | undefined;

  constructor(
    private idA: string,
    private idB: string,
    private amount: number
  ) {}

  configure(accounts: AccountInterface[]) {
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
