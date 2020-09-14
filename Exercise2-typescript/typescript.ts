interface IBankAccount{
    accountNumber: number,
    balance: number,
    firstName: string,
    lastName: string,
    rateOfInterest: number,
    ssn: number;

    addInterest();
    addInterest(fee: number);
    deposit(amount: number);
    getBalance() : number;
    withdraw(amount: number);
}

abstract class BankAccount implements IBankAccount{
    static nextAccountNumber: number = 1;
    accountNumber: number;
    balance: number;
    firstName: string;
    lastName: string;
    rateOfInterest: number;
    ssn: number;

    constructor(ssn: number, firstName: string, lastName: string, rateOfInterest:number = 0){
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

class OverdraftAccount extends BankAccount {
    overdraftInterest: number;
    overdraftLimit: number;

    constructor(ssn: number, firstName: string, lastName: string, limit: number, overdraftInterest: number = 0,  rateOfInterest: number = 0) {
        super(ssn, firstName, lastName, rateOfInterest);
        this.overdraftLimit = limit;
        this.overdraftInterest = overdraftInterest;
    }

    addInterest(fee? : number) {
        if (this.balance > 0) {
            this.balance += this.balance * this.rateOfInterest / 100;
        } else {
            this.balance -= this.balance*this.overdraftInterest/100;
        }
        if (fee != null) this.balance -= fee;
    }
}

class LoanAccount extends BankAccount{
    principal: number;

    constructor(ssn: number, firstName: string, lastName: string, principal: number,  rateOfInterest: number = 0) {
    super(ssn, firstName, lastName, rateOfInterest)
    this.principal = principal;
    }
    addInterest(fee?: number) {
        this.balance -= this.balance * this.rateOfInterest / 100;
        if (fee != null) {
            this.balance -= fee;
        }
    }
}