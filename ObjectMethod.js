myAccount={

name:'nagendra',
accNum:3335101002388,

actBal:1234,

checkBal:function(){

    let totalBal=this.actBal+'INR'
    console.log('the curent bal'+totalBal)
},

addBalance:function(amount,accNum){

    this.actBal=this.actBal+amount

    console.log(`the account number ${accNum} has been credited  with the amount ${amount}  the total bal ${this.actBal}`)

}


}

myAccount.checkBal()
myAccount.addBalance(400,34444444444)