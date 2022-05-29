export type AccountInterface = {
  id: string;
  addMoney: (amount: number) => void;
  subMoney: (amount: number) => void;
  getBalance: () => number;
};
