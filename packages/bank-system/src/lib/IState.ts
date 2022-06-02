import { Account } from "./Account";


export interface IState {
  

    ChangeState(context: Account): void;
    CalculateInterest(context: Account): Number;
}
