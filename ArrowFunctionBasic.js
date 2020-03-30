let sayHello=function(name){


    return 'Hi '+name
}

console.log(sayHello('nagendra'))

///using =>(arrow function)

let sayHelloArrow=(name) =>{

    return 'Hi '+name
}

console.log(sayHelloArrow('ravi'))

//////////////////////////////////////////

let sayHelloArrowF=(name) => 'Hi '+name


console.log(sayHelloArrowF('sushma'))



//#2

let balanceEnq=function(){

    return 'my avalibale balance is  1233'
}

console.log(balanceEnq())

///using =>(arrow function)
let balanceEnqArrow=()=>{

    return 'my avalibale balance is  1233'
}

console.log(balanceEnqArrow())
///////////////////////////

let balanceEnqArrowF=()=>'my avalibale balance is  1233'


console.log(balanceEnqArrowF())

//////////////////////////////////////////////////////////

const todo=[{
title:'Buy Fruites',
isDone:true

},{
title:'Had breakFast',
isDone:false

},{
title:'Start working',
isDone:false

}]

//with out => function
const thingsDone=todo.filter(function(tod){

    return tod.isDone===true
})

console.log(thingsDone)

//////with  => function

const thingsDoneArr=todo.filter((tod)=> tod.isDone===true)

console.log(thingsDoneArr)

/////////////for Each LOOp

todo.forEach(function(va,ind){

    console.log(`the  key '${ind} \t value ${va.title},${va.isDone}`)
    return va.title+'APPENDED'
})

/////for each LOOP using ARROW

todo.forEach((val,inde) => console.log(` ARROW the  key '${inde} \t value ${val.title},${val.isDone}`))


///////////////////

const cameras = {

name:'canan',
weight:600,
price:444,
//dont do =>
myDesc:() => {
    
  return  `my camera ${this.name}  cost is ${this.price} $`
}
}

console.log(cameras.myDesc())
