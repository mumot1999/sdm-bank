import { AccountInterface } from '../../interfaces/account.interface';

export class DebitAccount implements AccountInterface {
  private debit = 0;

  constructor(
    private account: AccountInterface,
    private maximumDebit: number
  ) {}

  get id() {
    return this.account.id;
  }

  private getDebitLeft = () => this.maximumDebit - this.debit;

  addMoney = (amount: number) => {
    const getAmount = Math.min(this.debit, amount);

    this.account.addMoney(amount - getAmount);
  };

  subMoney = (amount: number) => {
    const maximumAmount = this.account.getBalance();
    const debitLeft = this.getDebitLeft();

    const getAmountFromHigherAccount = Math.min(maximumAmount, amount);

    this.account.subMoney(getAmountFromHigherAccount);

    const addDebit = amount - getAmountFromHigherAccount;

    if (debitLeft < addDebit) {
      throw 'Maximum debit reached';
    }

    this.debit += addDebit;
  };

  getBalance = () => {
    return this.account.getBalance() + this.getDebitLeft();
  };
}
