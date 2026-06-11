// an account class with constructor 

class ACCOUNT{
    constructor(OWNER, BALANCE){
        this.OWNER = OWNER;
        this.BALANCE = BALANCE;
        this.TRANSACTION = [];
    }


  deposit(AMOUNT) {   // rest — accepts multiple amounts
    // add to balance
    this.BALANCE += AMOUNT;
    // push to transaction history and record it
    this.TRANSACTION.push({type :"deposit", AMOUNT});  
    console.log(`deposited: R${AMOUNT}. New Balance:${this.BALANCE} `)
  }

  withdraw(AMOUNT) {
    // check the balance and  block if not enough funds
    if(AMOUNT > this.BALANCE){
        console.log("INSUFICIENT FUNDS"); return;
    }
    //only get here if there is enough funds
    this.BALANCE  -= AMOUNT;
    this.TRANSACTION.push({type : "withdraw", AMOUNT});
    console.log(`Withdrew: R${AMOUNT}. Ramaining Balance: R${this.BALANCE}`)
    
  }

  getHistory() {
    return [...this.TRANSACTION]; // spread — return a copy, not the original
  }

}

// savings account that is extending account
class savingsAccount extends Account {
  constructor(OWNER, BALANCE, interestRate) {
    super(OWNER, BALANCE); // call parent
    // your code
    this.interestRate = interestRate ;
  }

  addInterest() {
    // calculate interest and deposit it
    const interest = this.BALANCE * this.interestRate;
    
    this.deposit(interest)
  }
}

const myAccount = new savingsAccount ("Lesedi", 100000, 0,05)