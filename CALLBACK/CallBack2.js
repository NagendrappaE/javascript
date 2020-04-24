let add=(a,b)=>{
return a+b

}

let multiply=(a,b)=>{


    return  a*b
}

let someThingElse =(a,b)=>{

    console.log(`inside  somethingElse ... ${a},${b}`)
}

///implement call back
let calc2=(num1,num2,callback)=>{

return callback(num1,num2)
}


var addVal=calc2(34,12,add)
var mulVal=calc2(245,33,multiply)
calc2(245,33,someThingElse)

console.log(addVal)
console.log(mulVal)


