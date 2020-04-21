

const User = require('./JSUserClass.js')


class BankUser extends User{

constructor(fName,lName,bName){
    super(fName,lName)
    this.bankUserName=bName
}

myBalance(){

    return `my current balance is {this.bankUserName}`
}

static getMyAccountNmber(){
return `my account number `

}

}


var usr=new  User()

var  bankusr=new BankUser('N','S','IBL')


//console.log(usr)
console.log(bankusr)
console.log(BankUser.getMyAccountNmber())