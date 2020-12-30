function dispaly(inp){
    console.log('the resulted value '+inp)
}

function myfirst(){

    dispaly('hiiiii')
}


function second(){

    dispaly('bye')
}
//functions will get executed ,order in which they called up

myfirst()
second()


//using callback

function call1(val1,value2,mydisp){

    mydisp(val1)
    mydisp(value2)
}

call1('gubal','goodBye',dispaly)