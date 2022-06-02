import { Account } from "./Account";
import {IState} from "./IState";


export class InterestRateA implements IState {
    public ChangeState(context: Account): void {
        context.State = new InterestRateB();
    }
    
    public CalculateInterest(context: Account): Number {
        return 0;
    }
}

export class InterestRateB implements IState {
    public ChangeState(context: Account): void {
        context.State = new InterestRateA();
    }
    
    public CalculateInterest(context: Account): Number {
        return 0;
    }
}