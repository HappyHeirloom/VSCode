class LoanAccount extends BankAccount {
    principal: number;
    addInterest(fee?: number) {
        this.balance -= this.balance * this.rateOfInterest / 100;
        if (fee != null) {
            this.balance -= fee;
        }
    }
}