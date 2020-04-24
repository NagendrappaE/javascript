class AccountInfo extends Error{

constructor(msg){
super(msg)
console.log('inside the Accountinfo ........')
}
validateAcc(amount){

if(amount>10){

    throw new AccountInfo('the amount is not  sufficent'+amount)
}
}

}

let savingAc=new AccountInfo()

savingAc.validateAcc(12)
