import Account from "../../src/account.js"
import Transaction from "../../src/transaction.js"
import {mockBalance, mockBalance2} from "./mockBalance.js";
import {mockTransactions, mockTransactions2} from "./mock.js";
describe('Tests for Bank Account', () => 
{
  let testAccount,transaction1, transaction2; 
  
 beforeEach(() => 
 {
  //Arrange  
  testAccount = new Account();
  transaction1= new Transaction();
  transaction2 = new Transaction();
 });

 afterEach(() => 
{
  //Arrange  
  testAccount = null;
  transaction1= null;
  transaction2 = null;
});

it('can deposit money ', () => 
  {
  //Arrange  
  let expected =1000;
  //Act
  testAccount.setBalance(mockBalance.credit, mockBalance.debit);
  //Assert
  expect(testAccount.getBalance()).toEqual(expected);
  });  

  it('can withdraw money from my account', () => 
    {
    //Arrange  
    testAccount.setBalance(mockBalance.credit,mockBalance.debit);
    testAccount.setBalance(mockBalance2.credit,mockBalance2.debit);   
    //Assert
    expect(testAccount.getBalance()).toEqual(500);
    });

    it('can deposit money sequentially', () => 
     {
      //Arrange  
      const testAccount = new Account();
      //Act
      transaction1 = new Transaction(new Date(mockTransactions.date), mockTransactions.credit, mockTransactions.debit);
      transaction2 = new Transaction(new Date(mockTransactions2.date),mockTransactions2.credit, mockTransactions2.debit);
      testAccount.updateTransaction(transaction1);
      testAccount.updateTransaction(transaction2);
      let result = testAccount.getTransactions();
      //Assert
      expect(result).toHaveSize(2);
      });

      it('will throw error when try to withdraw money higher than the account balance', () => 
      {  
        //Arrange  
        const testAccount = new Account();
       //Assert
        expect(function() {testAccount.setBalance(mockBalance2.credit,mockBalance2.debit)}).toThrowError();              
      });  

      it('Get Transcation Date', () => 
      {
      //Arrange  
      transaction1 = new Transaction(new Date(mockTransactions.date), mockTransactions.credit, mockTransactions.debit);
      const expected = new Date("2010,01,10").toLocaleDateString();
      //Act
      let result = transaction1.getDate();
      //Assert
      expect(result).toEqual(expected);
      });   
} )
  