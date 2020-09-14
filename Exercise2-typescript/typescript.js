var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
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
    BankAccount.nextAccountNumber = 1;
    return BankAccount;
}());
var OverdraftAccount = /** @class */ (function (_super) {
    __extends(OverdraftAccount, _super);
    function OverdraftAccount(ssn, firstName, lastName, limit, overdraftInterest, rateOfInterest) {
        if (overdraftInterest === void 0) { overdraftInterest = 0; }
        if (rateOfInterest === void 0) { rateOfInterest = 0; }
        var _this = _super.call(this, ssn, firstName, lastName, rateOfInterest) || this;
        _this.overdraftLimit = limit;
        _this.overdraftInterest = overdraftInterest;
        return _this;
    }
    OverdraftAccount.prototype.addInterest = function (fee) {
        if (this.balance > 0) {
            this.balance += this.balance * this.rateOfInterest / 100;
        }
        else {
            this.balance -= this.balance * this.overdraftInterest / 100;
        }
        if (fee != null)
            this.balance -= fee;
    };
    return OverdraftAccount;
}(BankAccount));
var LoanAccount = /** @class */ (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount(ssn, firstName, lastName, principal, rateOfInterest) {
        if (rateOfInterest === void 0) { rateOfInterest = 0; }
        var _this = _super.call(this, ssn, firstName, lastName, rateOfInterest) || this;
        _this.principal = principal;
        return _this;
    }
    LoanAccount.prototype.addInterest = function (fee) {
        this.balance -= this.balance * this.rateOfInterest / 100;
        if (fee != null) {
            this.balance -= fee;
        }
    };
    return LoanAccount;
}(BankAccount));
