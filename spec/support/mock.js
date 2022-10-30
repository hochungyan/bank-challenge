const mockTransaction1 = 
{
    date: new Date().toLocaleDateString(),
    credit: 1000,
    debit: 500,
    balance: 2000,
};
const mockTransaction2 = 
{
    date: new Date().toLocaleDateString(),
    credit: 2000,
    debit: 0,
    balance: 4000,
};
export const mockTransactions = 
{
    date: new Date(`10,01,2010`).toLocaleDateString(),
    credit: 1000,
    debit: 0,  
    balance:1000, 
};

export const mockTransactions2 = 
{
    date: new Date().toLocaleDateString(),
    credit: 1000,
    debit: 0,  
    balance:1000, 
};

//Makign a mock class which is acting like a public Enum class

export default (mockTransaction1, mockTransaction2);