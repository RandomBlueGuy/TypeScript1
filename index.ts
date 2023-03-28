

type Accounts = {
  number: string;
  balance: number;
};

const accounts: Accounts[] = [];

function open(number: string, balance: number): void {
  accounts.push({ number, balance });
}

const getBalance = (number: string): number | void => {
  const account = accounts.find((account) => number);
  if (account == null) {
    // throw new Error("La cuenta no se encontró")
    console.log("La cuenta NO existe");
  } else {
    return account.balance;
  }
};

const deposit = (number: string, amount: number): void => {
  const account = accounts.find((account) => account.number === number);
  if (!account) {
    // throw new Error("La cuenta no se encontró")
    console.log("La cuenta NO existe(FROM DEPOSIT)");
  } else {
    account.balance += amount;
  }
};

const withdraw = (number: string, amount: number): void => {
  const account = accounts.find((account) => account.number === number);
  if (!account) {
    // throw new Error("La cuenta no se encontró");
    console.log("La cuenta NO existe(FROM WITHDRAW)");
  } else if (account.balance - amount < 0) {
    // throw new Error("Fondos insuficientes");
    console.log("Fondos insuficientes");
  } else {
    account.balance -= amount;
  } 
};

open("111", 0);

deposit("111", 1000);
console.log("Actual Balance after deposit =>", getBalance("111"));

withdraw("111", 500)
console.log("Actual Balance after withdraw =>", getBalance("111"))

console.log("Account Status =>", accounts);
