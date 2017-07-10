/**
 * Created by kcp on 7/10/17.
 */
interface bankAccountInterface{
    money: number;
    deposit(value:number);
}

interface mySelfInterface{
    name: string;
    bankAccount: bankAccountInterface;
    hobbies:string[];
}

let bankAccount: bankAccountInterface ={
    money: 2000,
    deposit(value){
        this.money = value;
    }
};

let mySelf: mySelfInterface = {
    name:'Asaad',
    bankAccount: bankAccount,
    hobbies: ['Violin','Cooking']
};

mySelf.bankAccount.deposit(3000);