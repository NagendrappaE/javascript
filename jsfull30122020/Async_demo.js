//Async makes a function to retrun promise object

//ex1 

async function callf(){

    return Promise.resolve('success full done')
   

}

//consuming the promise

callf().then(function(x){
    console.log('fulfilled response'),
    function(y){
        console.log('rejected')
    }
})




//////////////async with reject promise////////


async function callRej(){

    try{
//do some operation
x=12

if(x==12){
    throw new Error('NAN'+x)
}

    }catch(err){
return Promise.reject(err)
    }

}

callRej().then(function(x){
    console.log('suss'+x)
   
})
//handle  error
callRej().catch(function(xy){
    console.log('cathc'+xy)
})


/////////////////////////one more example of the  async////////

async  function ageCal(inp){

    try{
        if(inp<28){
            //resolve
            return Promise.resolve('below age and selected '+inp)
        }else{
            throw new Error('invalid age '+inp)
        }

    }catch(err){
        return Promise.reject(err)
        console.log(err)
    }


}


//consume the async

ageCal(24).then(function(i){
    console.log('#########'+i)
})


ageCal(50).catch(function(i){
    console.log('*******'+i)
})