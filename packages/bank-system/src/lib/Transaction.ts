export class Transaction {
  public get type(): string {
    return this._type;
  }

  public get date(): Date {
    return this._date;
  }

  public get description(): string {
    return this._description;
  }

  constructor(
    private _type: string,
    private _date: Date,
    private _description: string
  ) {}
}
