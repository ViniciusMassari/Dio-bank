var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(name, accountNumber) {
        var _this = this;
        this.deposit = function () {
            console.log('Deposited');
        };
        this.withdraw = function () {
            console.log('money withdrew');
        };
        this.getBalance = function () {
            return _this.balance;
        };
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    return Account;
}());
var PeopleAccount = /** @class */ (function (_super) {
    __extends(PeopleAccount, _super);
    function PeopleAccount(doc_id, name, accountNumber) {
        var _this = _super.call(this, name, accountNumber) || this;
        (_this.doc_id = doc_id),
            (_this.name = name),
            (_this.accountNumber = accountNumber);
        return _this;
    }
    return PeopleAccount;
}(Account));
var CompanyAccount = /** @class */ (function (_super) {
    __extends(CompanyAccount, _super);
    function CompanyAccount(name, accountNumber) {
        var _this = _super.call(this, name, accountNumber) || this;
        _this.getLoan = function () {
            console.log('you took out a loan');
        };
        return _this;
    }
    return CompanyAccount;
}(Account));
7;
var people = new PeopleAccount(13432543, 'Vini', 50);
console.log(people);
var companyA = new CompanyAccount('INC', 20);
console.log(companyA);
