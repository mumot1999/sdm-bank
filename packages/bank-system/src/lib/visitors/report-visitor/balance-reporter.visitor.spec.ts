import { BalanceReporter } from './balance-reporter.visitor';
describe('balance-reporter', () => {
  test('should sum all balances', () => {
    const balanceReporter = new BalanceReporter();

    type Element = Parameters<typeof balanceReporter['visit']>[0];

    const elements = <Element[]>[
      { getBalance: () => 100 },
      { getBalance: () => 50 },
      { getBalance: () => 50 },
    ]

    elements.forEach(balanceReporter.visit)

    expect(balanceReporter.sum).toEqual(200);
  });
});
