import { Account } from './Account';

export class DebitAccount extends Account {
  constructor(
    id: string,
    balance: number,
    date: Date,
    private capability: number
  ) {
    super(id, balance, date);
  }

  public override transfer(outcome: number): void {
    if (this.balance - outcome >= this.capability * -1) {
      this._balance -= outcome;
    }
    //TODO throw error?
  }
}
