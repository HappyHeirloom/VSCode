interface IBankAccount {
    accountNumber: number;
    firstName: string;
    lastName: string;
    ssn: number;
    balance: number;
    rateOfInterest: number;

    addInterest();
    addInterest(fee : number);
    deposit(amount: number);
    withdraw(amount: number);
    getBalance(): number;
};