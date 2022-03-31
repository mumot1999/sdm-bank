export class Operation {
  public get description(): string {
    return this._description;
  }

  constructor(private _description: string) {}
}
