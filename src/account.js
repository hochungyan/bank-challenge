
class Account{
#balance;
#TransactionRecord;

constructor(balance =0)
{
    this.#balance =balance;
    this.#TransactionRecord = [];
}

//Set Balance [Tenary operator]
//Add for credit Remove for debit
setBalance(credit, debit)
{
    this.#balance += (credit ? credit : -debit);
    if (this.#balance < 0)
    {
        throw new Error(`Negative Balance`);
    }
}

getBalance()
 {
    return this.#balance;
 } 

updateTransaction(transaction)
{
  const credit = transaction.getCredit(); 
  const debit = transaction.getDebit();  
this.setBalance(credit, debit);
 const trans = {
    // ToLocaleDateString -m/d/yyy 
    date : transaction.getDate(),
    credit,
    debit,
    balance : this.getBalance()
    
   }
//Can use push or unshift 
this.#TransactionRecord.unshift(trans);
}
getTransactions()
{
    return this.#TransactionRecord;
}

}
export default Account;