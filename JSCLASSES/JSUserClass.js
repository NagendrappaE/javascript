class User{


//constructor
 constructor(fName,lName){

    this.firstName=fName

    this.lastName=lName

 }
 
//methods
 myData(){
     return   this.mySalary()+ `my city is  and my full name is ${this.firstName} ${this.lastName}`
 }

mySalary(){

    return 'i will get in hands '
}


}



var nag=new User('Nagendra','Sushma')
console.log(nag.myData())
module.exports = User
