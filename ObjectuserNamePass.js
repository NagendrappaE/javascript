let   emailId='nagendra@gmail.com'

let userName='Nagendra123'

let userCheck=function(myStr){

    if((myStr.includes(123))&&(myStr.length >6)){

return true

    }

    return false
}


console.log(userCheck('nagendra123'))

console.log(userCheck('nagendra124'))