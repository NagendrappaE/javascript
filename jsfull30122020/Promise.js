var myFirstprom=new Promise(function(myResolve,myReject){

var x=0

if(x==0){
    myResolve("Ok my boy")
}else{

    myReject("Erro")
}

})

myFirstprom.then(function(val){
    myDispaly(val)
},
function(val){
myDispaly(val)
})




function myDispaly(inp){

    console.log(inp)
}

//using ecma script 
var nodeval=18


//global variable
var resval
console.log('value'+nodeval)

var prom=new Promise((resol,rej)=>{

    //i will do some operation 

    if(nodeval==1){

        resol('success full ')
    }else{

        rej("Errorrrrrrrr")
    }

})

prom.then((vl)=>{
    console.log(vl)

    resval=vl

},
(v2)=>{
    console.log(v2)
resval=v2
})



