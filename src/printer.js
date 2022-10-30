class Printer
{
  //toFixed() convert number to fix number of decimals
  //Printer will print out credit in green and debit in red!
    static print(transactions) 
    {
        console.log("date        || credit  || debit  || balance");
         for (let i = 0; i <=  transactions.length -1; i++) {
             if (transactions[i].credit > 0 ) 
            {
                console.log(transactions[i].date + "  || " +"\x1b[32m"+ parseFloat(transactions[i].credit).toFixed(2) +"\x1b[37m"+" ||" + "        " + "|| " + parseFloat(transactions[i].balance).toFixed(2))
            } 
            if (transactions[i].debit > 0) 
            {
                console.log(transactions[i].date + "  || " + "      " + "  || " + "\x1b[31m"+ parseFloat(transactions[i].debit).toFixed(2) + "\x1b[37m"+  " || " + parseFloat(transactions[i].balance).toFixed(2))
            }
     }
    }
}
export default Printer;