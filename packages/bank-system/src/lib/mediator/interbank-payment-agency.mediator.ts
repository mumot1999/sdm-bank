export type BankPrefix = string;
export interface MediatorBank {
  prefix: BankPrefix;
  receiveTransfer: (accountNumber: string, balance: number) => void;
  setInterbankPaymentAgency: (a: Pick<Mediator, 'makeTransfer'>) => void;
}

export interface Mediator {
  register(bank: MediatorBank): void;
  makeTransfer: MakeTransferFN
}

export type MakeTransferFN = (accountNo: string, amount: number) => void

export class InterbankPaymentAgency implements Mediator {
  private banks: Record<BankPrefix, MediatorBank> = {};

  register(bank: MediatorBank): void {
    this.banks[bank.prefix] = bank;
    bank.setInterbankPaymentAgency({makeTransfer: this.makeTransfer.bind(this)})
  }

  makeTransfer(accountNo: string, amount: number) {
    this.banks[accountNo.slice(0, 2)].receiveTransfer(accountNo, amount);
  }
}
