//const with  primitive type cant chnage the value assigned once

//const as global variabel

const pi=3.124

//block
{
    console.log('inside the block'+pi)
}
//pi=23 //reaiign   with  error TypeError: Assignment to constant variable.

console.log('outside the block '+pi)


//function

function functionconst(){

    console.log('inside the function '+pi)
}

functionconst()


///const with  objects can be changed

const constObj={

    name :'evolvus',

    age:28


}

console.log(constObj)

//reasign the values to const

constObj.name='Nagnedra'

console.log(constObj)


//adding new  key to the constant object

constObj.salary=23.00

console.log('post add the key to const object '+Object.values(constObj))

console.log(constObj)