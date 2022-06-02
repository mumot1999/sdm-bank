import { DummyInterestRate, LineralInterestRate } from './interest-rate.state';
import { InterestRate, Product } from './interest-rate.interface';
describe('interest rate', () => {
  test('should calculate interest rate', () => {
    class ProductA implements Product {
      private interestRate: InterestRate = new DummyInterestRate();

      setInterestRate = (interestRate: InterestRate) => {
        this.interestRate = interestRate;
      };

      getBalance = () => this.interestRate.calculateInterestRate(100);
    }

    const product = new ProductA();
    product.setInterestRate(new LineralInterestRate(1.05));

    expect(product.getBalance()).toEqual(105);
  });
});
