abstract class BankAccount implements IBankAccount {
    accountNumber: number;
    firstName: string;
    lastName: string;
    ssn: number;
    balance: number;
    rateOfInterest: number;
    static nextAccountNumber: number = 1000;

    constructor(ssn:number, firstName:string, lastName:string, rateOfInterest:number = 0) {
        this.accountNumber = BankAccount.nextAccountNumber++;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest;
        this.balance = 0;
    }

    abstract addInterest();
    abstract addInterest(fee : number);
    deposit(amount: number) { this.balance += amount; };
    withdraw(amount: number) { this.balance -= amount; };
    getBalance(): number { return this.balance; };
}