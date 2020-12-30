//simple for loop

for (let i=0;i<5;i++){
    console.log('inside the for loop'+i)
}

//array of objects iterate

const data =['z','y',3,7]

for(let i=0;i<data.length;i++){
    console.log('the data'+data[i])
}

data.push('Nagendra',67,false)

for(let i=0;i<data.length;i++){
    console.log('the data'+data[i])
}

//for of 

for(let i of data){
    console.log('for of '+i)
}


//some string value

var mystr='Nagendra ravi'

for(let g of mystr){

    console.log('string val'+g)

}

//for in example
//not usefull
let mystr2='Gubal'

for(let va in mystr2){

    console.log('for in example '+va)
    console.log('for in '+mystr2)
}

//for in with objects
//itrates the propetes and values of objects
var obj={
    name:'Nagendr',
    age:34,
    gender:'male',
    ismarried:false
}


for (let  dd in obj ){

    console.log('the property name'+dd+'\ the alue'+obj[dd])
}



///array of  objects


var arrObj=[{
name:'Nagendra',
age:28

},
{
    name:'giiri',
    agg:33

},
{

    lname:'gubal',
    firstNam:'giri'

}]


console.log("===========================")
for( let i in arrObj){

    console.log('the property name'+i+'\ the alue'+arrObj[i].firstNam)

}


//create array

let ar=new Array("v",8,"nnn")

console.log(ar.length)