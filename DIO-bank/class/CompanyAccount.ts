import DioAccount from './DioAccount';

class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number) => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + value);
      console.log('loan completed ! balance: ' + this.getBalance());
    } else {
      console.log('unable to loan, innactive account');
    }
  };
}

export default CompanyAccount;
