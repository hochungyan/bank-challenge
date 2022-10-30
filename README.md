# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing by using [npm start]!
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- ✅ Meets the spec
- ✅ Developed test-first
- ✅ Passes tests and code is linted
- ✅ Encapsulates adding and storing Transactions in a class
- ✅ Encapsulates Statement formatting in a class
- ✅ Encapsulates Transaction data in a class

#### Extended
- [ ] See a coach!

#### User Stories
```
Test 1
As a user,
I would like to make a deposit
So that I can add money to my balance
```
| Object      | Properties                     | Messages          | Output             |
| ----------- | ------------------------------ | --------------    | ------------------ |
| Account     | balance @Number                | setBalance()      |     @integer         |
|      |                                       | getBalance()      |     @integer       |
1. using setBalance and we can input both credit and debit at the same time and use getBalance to get the balance for the transcation. 
2. mockBalance is created in mockBalance.js and we will use them to setBalance(), it can prevent users directly interact with the setBalance() method.
3. For Test 1, we will deposit 1000 [credit] and the result should also be 1000 when you use getBalance()
4. We also use beforeEach and afterEach to setup then clean up the code each time a test is run!
```
Test 2
As a user,
I would like to withdrawal money
So that I can take money out of my account
```
| Object      | Properties                     | Messages          | Output             |
| ----------- | ------------------------------ | --------------    | ------------------ |
| Account     | balance @Number                | setBalance()      |     @integer        |  
|             |                                | getBalance()      |     @integer       |
1. For Test 2, we will withdraw 500 [debit] when the balance is 1000. So the final balance will be 500 when you use the getBalance() method.
```
Test 3
As a user,
I would like to make multiple deposits
So that I can increase my balance
```
| Object      | Properties                     | Messages          | Output             |
| ----------- | ------------------------------ | --------------    | ------------------ |
| Account     | #TransactionRecord@Array[]     | setBalance()      |     @integer         |  
|     |                                |  getBalance()        |     @Integer      |
|     |                                |  updateTransaction()        |     @Account       |
|     |                                |  getTranscations()        |     @TransactionRecord@Array[]      |
|    |      | checkIfOnlyTwoTransactionsInTheArray    |     @boolean         | 
1. For Test 3, we will use updateTransaction() twice so the final size of the array should be  and we use expect(result).toHaveSize(2) to confirm that.
```
Test 4
As a user,
I want to see an error when I withdraw money greater than my account balance
So I don't have a negative balance 
```
| Object      | Properties                     | Messages          | Output             |
| ----------- | ------------------------------ | --------------    | ------------------ |
| Account |    | checkIfTakingMoneyGreaterThanCurrentBalance       |     @Error        |  
1. The initial balance should be 0, so when we withdraw 500 from the account. We should expect an error.
2. We have created an if loop inside the setBalance method and it will throw an error when the final balance is less than 0.
```
Test 5
As a bank user,
so that I can visualise my deposits, withdrawals, and current balance in any given time,
I would like my bank statement to show the date in which each transaction occurred.
```
| Object      | Properties                     | Messages          | Output             |
| ----------- | ------------------------------ | --------------    | ------------------ |
| Transaction |#date @Date     | getDate()      |     @Date         |  
| Transaction |     | checkIfBothDatesAreSame       |     @Boolean        |  
1. Using getDate() method we can get the Transaction date for any transaction and it should be 2010,01,10 
```
Test 6
As a user,
I want to print my transaction as a statement
So I can see all of the activities in my account
```
| Object      | Properties                     | Messages          | Output             |
| ----------- | ------------------------------ | --------------    | ------------------ |
| Printer |TransactionRecord@Array[trans]    | print()       |     @String        |  
|  |   | checkIfOnlyTwoTransactionsAreMade       |     @Boolean        |  
1. Finally, in Test 6, we use logSpy to spy how many times the console log has printed something. In this case, it will be 3 times for 2 Transactions. 