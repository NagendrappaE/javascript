
 //ayHello is the function name
let sayHello=function(){
console.log('welcome to programmm')

console.log('hey user')


}

//call function 

sayHello()

//2nd

let sayHelloName=function(name){

console.log('welcome to the program user'+name)
console.log('hey user'+name)
}
//call  function
sayHelloName('nagendra')

//3rd

let fullNamemaker=function(fname,lname){

    console.log(`the first name, ${fname}  plese  ${lname}`)
}

//call function
fullNamemaker('nagendra','ravi')

//4th 

let  totalSalary=function(basicpay,pf){

    let sum=basicpay+pf
    return sum
}

console.log('total sal'+totalSalary(10000,234))

let res=totalSalary(20000,234)

console.log('the  result'+res)