import { AccountInterface } from './../../interfaces/account.interface';
import { TransferCommand } from './transfer.command';
import { TransferInvoker } from './transfer.invoker';

describe('transfer command system', () => {
  test('should sub money from accountA and add to accountB', () => {
    const accountA: AccountInterface = {
      addMoney: jest.fn(),
      subMoney: jest.fn(),
      getBalance: () => 0,
      id: '1111 1111',
    };

    const accountB: AccountInterface = {
      addMoney: jest.fn(),
      subMoney: jest.fn(),
      getBalance: () => 0,
      id: '2222 2222',
    };

    const transferInvoker = new TransferInvoker([accountA, accountB]);

    const command = new TransferCommand('1111 1111', '2222 2222', 200);
    transferInvoker.dispatch(command);

    expect(accountA.subMoney).toBeCalledWith(200);
    expect(accountB.addMoney).toBeCalledWith(200);
  });
});
