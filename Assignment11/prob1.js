var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money = value;
    }
};
var mySelf = {
    name: 'Asaad',
    bankAccount: bankAccount,
    hobbies: ['Violin', 'Cooking']
};
mySelf.bankAccount.deposit(3000);
