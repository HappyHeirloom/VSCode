var BankAccount = (function () {
    function BankAccount(ssn, firstName, lastName, rateOfInterest) {
        if (rateOfInterest === void 0) { rateOfInterest = 0; }
        this.accountNumber = BankAccount.nextAccountNumber++;
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.rateOfInterest = rateOfInterest;
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (amount) { this.balance += amount; };
    ;
    BankAccount.prototype.withdraw = function (amount) { this.balance -= amount; };
    ;
    BankAccount.prototype.getBalance = function () { return this.balance; };
    ;
    BankAccount.nextAccountNumber = 1000;
    return BankAccount;
}());
//# sourceMappingURL=BankAccount.js.map