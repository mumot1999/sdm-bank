import { TransferCommand } from './transfer.command';

export class TransferInvoker {
  dispatch(command: TransferCommand): ReturnType<TransferCommand['execute']> {
    return command.execute();
  }
}
