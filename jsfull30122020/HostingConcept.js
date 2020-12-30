//https://www.interviewbit.com/javascript-interview-questions/#javascript-hoisting
//Hosting   
 /* irespective of where the variables and functions declared,they are moved to top of the scope, both can act as local and global ariable
 */
///1
 a=10

console.log("==========="+a)

var a;

//2

callHoisting()

function callHoisting(){
    console.log('Hosting function')
}

//3 the hosting declaration will takes place
//local scope
function f1(){
x=23
console.log("dd")

var x
}

//variable initilization not hoisted but variable declaration hoisted

var ho //variable declaration
console.log('+++++++'+ho)

ho=23  //variable initialization


////////use strict mode    to avoid the hoisting

"use strict";

z=20
console.log("theeee"+z)

var z



