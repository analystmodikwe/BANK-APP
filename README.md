
# 🏦 Mini Bank App

A responsive browser-based banking app built with vanilla JavaScript, HTML, and CSS. Built as a hands-on project to practise Object-Oriented Programming, DOM manipulation, and event handling.

---

## 📸 Features

- Deposit money into your account
- Withdraw money with insufficient funds protection
- Add monthly interest to a savings account
- View full transaction history with timestamps
- Deposits highlighted in green, withdrawals in red
- Responsive design — works on desktop and mobile

---

## 🛠️ Built With

- HTML5
- CSS3 (Custom Properties, Flexbox, Media Queries)
- Vanilla JavaScript (ES6+ Classes, Inheritance, Spread Operator, Arrow Functions)

---

## 💡 JavaScript Concepts Practised

| Concept | Where it's used |
|---|---|
| `class` + `constructor` | `Account` class |
| `extends` + `super` | `SavingsAccount` inherits `Account` |
| Methods | `deposit()`, `withdraw()`, `addInterest()` |
| Spread operator `...` | `getHistory()` returns a safe copy |
| Objects | Each transaction stored as `{ type, AMOUNT, time }` |
| DOM manipulation | Balance and history updated on screen |
| Event handling | Buttons trigger deposits, withdrawals, interest |
| Input validation | Blocks withdrawals exceeding current balance |
| `Date` object | Timestamps on every transaction |

---

## 📁 Project Structure

```
mini-bank-app/
├── index.html       # App structure and layout
├── style.css        # Styling and responsive design
└── script.js        # All JavaScript logic
```

---

## ⚙️ How It Works

### Class Structure

```javascript
// Base class — core banking logic
class ACCOUNT {
  constructor(OWNER, BALANCE) { ... }
  deposit(AMOUNT)  { ... }   // adds to balance, records transaction
  withdraw(AMOUNT) { ... }   // subtracts from balance, blocks if insufficient
  getHistory()     { ... }   // returns spread copy of transactions
}

// Child class — extends Account with interest feature
class SavingsAccount extends ACCOUNT {
  constructor(OWNER, BALANCE, interestRate) { ... }
  addInterest() { ... }   // calculates and deposits interest
}
```

### Transaction History

Every transaction is stored as an object:

```javascript
{ type: "deposit", AMOUNT: 500, time: "2026/06/13, 10:18:05" }
```

### DOM Updates

Every button click calls `updateDisplay()` which:
1. Updates the balance on screen
2. Clears the old history list
3. Rebuilds the list with the latest transactions
4. Assigns `.deposit` or `.withdraw` CSS class for colour coding

---

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/mini-bank-app.git
```

2. Open `index.html` in your browser — no install needed.

---

## 📱 Responsive Design

| Screen | Layout |
|---|---|
| Desktop | Buttons side by side, large balance display |
| Mobile (≤ 480px) | Buttons stack full width, balance scales down |

---

## 🔮 Future Improvements

- [ ] Let user create account by entering their name on load
- [ ] Block buttons if input is empty or zero
- [ ] Add multiple account support
- [ ] Persist data with localStorage
- [ ] Export transaction history as PDF

---

## 👨‍💻 Author

**Lesedi** — Junior Full-Stack Developer, South Africa  
Building projects to practise JavaScript, OOP, and DOM manipulation.