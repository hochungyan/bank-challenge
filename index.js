import Account from "./src/account.js";
import Printer from "./src/printer.js";
import Transaction from "./src/transaction.js";

let account = new Account(); 
const transaction1 = new Transaction(new Date("2010,01,10"), 1000, 0);
const transaction2 = new Transaction(new Date("2010,01,13"), 2000, 0);
const transaction3 = new Transaction(new Date("2010,01,14"), 0, 500);
//Act
account.updateTransaction(transaction1);
account.updateTransaction(transaction2);
account.updateTransaction(transaction3);

Printer.print(account.getTransactions());