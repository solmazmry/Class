// BankAccount adlı bir sinif yaradın. Bu sinifin bir balance (balans) xüsusiyyəti və deposit və withdraw metodlarına sahib olsun.
class BankAccount {
  constructor(balance, deposit, withdraw) {
    this.balance = balance;
    this.deposit = deposit;
    this.withdraw = withdraw;
  }
  deposits(deposit) {
    console.log(deposit);
  }
  withdraws(withdraw) {
    console.log(withdraw);
  }
}
