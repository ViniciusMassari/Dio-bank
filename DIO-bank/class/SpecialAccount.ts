import DioAccount from './DioAccount';

export default class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number) => {
    this.setBalance(this.getBalance() + value + 10);
    console.log('deposit made ! account Balance: ' + this.getBalance());
  };
}
