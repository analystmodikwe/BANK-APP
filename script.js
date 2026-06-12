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

};

// savings account that is extending account
class SavingsAccount extends ACCOUNT {
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
};
// creating  my acount and adding DOM (instance)
const myAccount = new SavingsAccount ("Lesedi", 100000, 0.05);

// creating the DOM
const ownerName = document.getElementById("owner-name");
const ownerBalance = document.getElementById("balance");
const ownerInput = document.getElementById("amount-input");
const depositButton = document.getElementById("deposit-btn");
const withdrawButton = document.getElementById("withdraw-btn");
const interestButton = document.getElementById("interest-btn");
const historyList = document.getElementById("history-list");

// creating a function to update the screen
const updateDisplay = () =>{

  ownerName.textContent = myAccount.OWNER;
  ownerBalance.textContent = myAccount.BALANCE;
  // clear old history and replace
  // creating a list that will show everthing
  historyList.innerHTML = "";
  myAccount.getHistory().forEach(TRANSACTION => {
    const list = document.createElement("li")
    list.textContent = `${TRANSACTION.type} : ${TRANSACTION.AMOUNT}`;
    list.className = TRANSACTION.type;
    historyList.appendChild(list);
    
  });
};

//  calling our function
updateDisplay();

// adding event listners for deposit button
depositButton.addEventListener("click", () =>{
  const amount = Number(ownerInput.value);
  myAccount.deposit(amount);
  updateDisplay();
  ownerInput.value ="";
});

// adding event listeners to withdraw button
withdrawButton.addEventListener("click", () =>{
  const amount = Number(ownerInput.value);
  myAccount.withdraw(amount);
  updateDisplay();
  ownerInput.value ="";
});

// adding event listners to the interest button
interestButton.addEventListener("click", () =>{
  myAccount.addInterest();
  updateDisplay()
});

