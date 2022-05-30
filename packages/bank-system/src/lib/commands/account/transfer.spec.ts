import { Transferable } from '../../interfaces/transferable.interface';
import { AccountInterface } from './../../interfaces/account.interface';
import { TransferCommand } from './transfer.command';
import { TransferInvoker } from './transfer.invoker';

describe('transfer command system', () => {
  test('should sub money from accountA and add to accountB', () => {
    const accountA: Transferable = {
      addMoney: jest.fn(),
      subMoney: jest.fn(),
      getBalance: () => 0,
    };

    const accountB: Transferable = {
      addMoney: jest.fn(),
      subMoney: jest.fn(),
      getBalance: () => 0,
    };

    const transferInvoker = new TransferInvoker();

    const command = new TransferCommand(accountA, accountB, 200);
    transferInvoker.dispatch(command);

    expect(accountA.subMoney).toBeCalledWith(200);
    expect(accountB.addMoney).toBeCalledWith(200);
  });
});
