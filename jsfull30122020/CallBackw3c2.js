//normal funcation 

function result(inp){

    console.log('the calculated value'+inp)
}



function calculate( a , b ){

    return 100*a*b

}


var res=calculate(12,30)
result(res)


//using the call back


function cal(x,y,anotherfun){

var sum=100*x*y
anotherfun(sum)

}

cal(23,34,result)