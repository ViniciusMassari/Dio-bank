abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number;
  private status: boolean;
  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.status = true;
  }

  getName = (): string => {
    return this.name;
  };

  getBalance = (): number => {
    return this.balance;
  };

  setBalance = (value: number) => {
    return (this.balance = value);
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value);

      console.log('Deposited ! account balance: ' + this.getBalance());
    } else {
      console.log('unable to deposit, inactive account');
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.getBalance() > value) {
      this.setBalance(this.getBalance() - value);
      console.log('withdraw completed ! account balance: ' + this.getBalance());
    } else {
      console.log(
        'unable to withdraw, innactive account or insufficient balance'
      );
    }
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    } else {
      throw new Error();
    }
  };
}

export default DioAccount;
