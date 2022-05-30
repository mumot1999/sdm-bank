export interface Transferable {
  addMoney: (amount: number) => void;
  subMoney: (amount: number) => void;
  getBalance: () => number;
}
