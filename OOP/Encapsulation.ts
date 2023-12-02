class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  withDraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient funds");
    }
  }
}

const AdarshAccount = new BankAccount(5000);
// Check the initial amount
console.log("Starting balance is: " + AdarshAccount.getBalance());

// Deposit the amount
AdarshAccount.deposit(5000);
console.log("Depositing 5000 ................");

// Check the amount
console.log("New balance is: " + AdarshAccount.getBalance());

//Withdraw first time
try {
  console.log("Withdrawing 9000 .............");
  AdarshAccount.withDraw(9000);
} catch (e: any) {
  console.error(e.message);
  console.log("Your total balance currently is " + AdarshAccount.getBalance());
}

console.log("Remaning Money : " + AdarshAccount.getBalance());

// Withdraw second time
try {
  console.log("Withdrawing 5000 .............");
  AdarshAccount.withDraw(5000);
  console.log("Your total balance currently is " + AdarshAccount.getBalance());
} catch (e: any) {
  console.log("Be rich enough");
  console.log("Your total balance currently is " + AdarshAccount.getBalance());
}
