type Transaction = [date: string, amount: number];
class Account {
  transactions: Array<Transaction>;
 
  constructor() {
    this.transactions = [];
  }
  deposit(amount: number): void {
    let date = new Date().toLocaleDateString();
    this.transactions.push([date, (Math.abs(amount))]);
  }
  withdraw(amount: number): void {
    let date = new Date().toLocaleDateString();
    this.transactions.push([date, -(Math.abs(amount))]);
  }
  printStatement(): string {
    let statement: string = "Date   |   Amount  |   Balance\n";
    let cashBalance: number = 0;
    this.transactions.forEach((value, index) => {
        cashBalance += value[1];
        statement = statement.concat(`${value[0]}   |   ${value[1]}    |   ${cashBalance}\n`);
    });
    return statement;
  }
}
export { Account }