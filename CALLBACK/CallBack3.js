///aaonymous function

let calc2=(num1,num2,callback)=>{

    return callback(num1,num2)
    }

    //anonymos function 1
   var anonimous= calc2(4,7,function(n1,n2){

return n1+n2
    })

    console.log(anonimous)



        //anonymos function 1

    var anyArrow=calc2(45,55, (x,y)=>{

        return x-y
    })
    console.log(anyArrow)


    ////////////////

