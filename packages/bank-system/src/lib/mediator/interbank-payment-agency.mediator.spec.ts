import { InterbankPaymentAgency } from './interbank-payment-agency.mediator';
describe('interbank-payment', () => {
  test('should transfer', () => {
    const ia = new InterbankPaymentAgency();
    const bankAReceiveTransfer = jest.fn();

    ia.register({
      prefix: '01',
      receiveTransfer: bankAReceiveTransfer,
      setInterbankPaymentAgency: () => {
        0;
      },
    });

    ia.register({
      prefix: '02',
      receiveTransfer: () => {
        0;
      },
      setInterbankPaymentAgency: ({ makeTransfer }) => {
        makeTransfer('01 1234', 100);
      },
    });

    // Bank A gets transfer from bank B
    expect(bankAReceiveTransfer).toBeCalledWith('01 1234', 100)
  });
});
