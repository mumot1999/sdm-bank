export type AccountInterface = {
    addMoney: (amount: number) => void
    subMoney: (amount: number) => void
    getBalance: () => number
}