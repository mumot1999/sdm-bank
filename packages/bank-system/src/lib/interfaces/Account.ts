export type Account = {
    addMoney: (amount: number) => void
    subMoney: (amount: number) => void
    getBalance: () => number
}