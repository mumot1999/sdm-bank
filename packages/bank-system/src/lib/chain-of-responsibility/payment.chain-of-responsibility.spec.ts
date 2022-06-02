import { buildChain } from './payment.chain-of-responsibility';

describe('chain-of-responsibility', () => {
  test('should work', () => {
    const handleA = jest.fn();

    const chain = buildChain([
      {
        handle: (p) => {
          if (p.type === 'payment') handleA();
        },
      },
      { handle: (p) => handleA() },
    ]);

    chain.handle({ type: 'payment', amount: 200, receiver: '1234' });

    expect(handleA).toBeCalledTimes(2);
  });
});
