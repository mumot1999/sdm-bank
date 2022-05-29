import { TransferCommand } from './transfer.command';
import { AccountInterface } from './../../interfaces/account.interface';

export class TransferInvoker {
  constructor(private accounts: AccountInterface[]) {}

  dispatch(command: TransferCommand): ReturnType<TransferCommand['execute']> {
    command.configure(this.accounts);
    return command.execute();
  }
}
