class OverdraftAccount extends BankAccount {
    overdraftLimit: number;
    overdraftInterest: number;

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