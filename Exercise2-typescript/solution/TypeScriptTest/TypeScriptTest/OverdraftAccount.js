var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OverdraftAccount = (function (_super) {
    __extends(OverdraftAccount, _super);
    function OverdraftAccount(ssn, firstName, lastName, limit, overdraftInterest, rateOfInterest) {
        if (overdraftInterest === void 0) { overdraftInterest = 0; }
        if (rateOfInterest === void 0) { rateOfInterest = 0; }
        _super.call(this, ssn, firstName, lastName, rateOfInterest);
        this.overdraftLimit = limit;
        this.overdraftInterest = overdraftInterest;
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
//# sourceMappingURL=OverdraftAccount.js.map