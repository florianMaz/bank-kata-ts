"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account() {
        this.transactions = [];
    }
    Account.prototype.deposit = function (amount) {
        var date = new Date().toLocaleDateString();
        this.transactions.push([date, (Math.abs(amount))]);
    };
    Account.prototype.withdraw = function (amount) {
        var date = new Date().toLocaleDateString();
        this.transactions.push([date, -(Math.abs(amount))]);
    };
    Account.prototype.printStatement = function () {
        var statement = "Date   |   Amount  |   Balance\n";
        var cashBalance = 0;
        this.transactions.forEach(function (value, index) {
            cashBalance += value[1];
            statement = statement.concat("".concat(value[0], "   |   ").concat(value[1], "    |   ").concat(cashBalance, "\n"));
        });
        return statement;
    };
    return Account;
}());
exports.Account = Account;
