var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoanAccount = (function (_super) {
    __extends(LoanAccount, _super);
    function LoanAccount() {
        _super.apply(this, arguments);
    }
    LoanAccount.prototype.addInterest = function (fee) {
        this.balance -= this.balance * this.rateOfInterest / 100;
        if (fee != null) {
            this.balance -= fee;
        }
    };
    return LoanAccount;
}(BankAccount));
//# sourceMappingURL=LoanAccount.js.map