class Bank {
  private _accounts: UserAccount[];
  public get accounts(): UserAccount[] {
    return this._accounts;
  }
  public set accounts(value: UserAccount[]) {
    this._accounts = value;
  }

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}
