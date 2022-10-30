import Printer from "../../src/printer.js";
import mockTransaction1 from "./mock.js";
import mockTransaction2 from "./mock.js";

describe('Printer test', () => {
    
    beforeEach(() => 
    {
    mockTransaction1;
    mockTransaction2;
    });
   
    it('should print the given array', () => 
    {
        //Arrange
        const logSpy = spyOn(console, `log`);
        const mockTransactions = [mockTransaction1, mockTransaction2]
        //Act
        Printer.print(mockTransactions);
       //Assert
        expect(logSpy).toHaveBeenCalledTimes(mockTransactions.length+1 );
      
    });
});