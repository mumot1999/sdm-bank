import { Transferable } from '../../interfaces/transferable.interface';
import { Visitor } from './report-visitor.interface';

export type ElementWithBalance = Pick<Transferable, 'getBalance'>;

export class BalanceReporter implements Visitor<ElementWithBalance> {
  public sum_ = 0;

  get sum() {
    return this.sum_;
  }

  visit = (e: ElementWithBalance) => {
    this.sum_ += e.getBalance();
  };
}
