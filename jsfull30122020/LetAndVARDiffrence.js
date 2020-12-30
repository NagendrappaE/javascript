//var is function scoped
//let is block scoped


//block
{
    let x=10 
    //i can access the value inside the block but not outside
    console.log('inside the block'+x)
}


//console.log('the let value out side the function '+x) // x is not defined

//function
let fu=(xxx)=>{

    var v1=23   //localvariable

    console.log('inside the function'+xxx)
    console.log('inside the  function '+v1)
}
fu('d')
//console.log('outside the function'+v1)



///var with the block  accesable

{

    var myvar='nagendra'

}
console.log('var inside the block '+myvar)



//function with  var ,outside not accesable
function myvarchek(){
var funV='Sushma'

}
//funV undefined ,reference error
//console.log('Function var value'+funV)


////////////////////////////////////////////////////////

//function with  let example


function letEx(){

    let hello='jjjjjjj'

    console.log('letEx with function'+hello)

}
////cont with primitive type is the constant value we cant alter the values

//console.log('let with  function outside'+hello)
letEx()


//function another example

//output will be undefined
console.log('the val'+xy)

var xy=222


//will cause the reference error
//console.log('let val'+le)

let le=22



////////////////globla variabl////it is valid until the page is redirected to another

/////let example


let g1=222

{
    console.log('global let'+g1)
    g1=33
    console.log('global post reasign'+g1)
}


///var example

var ll=3333
{
    console.log('the   global var example '+ll)
}

