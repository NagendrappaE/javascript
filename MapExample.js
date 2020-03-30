var nagendra={

    ifsc:'indb00001',
    bal:6777777,
    accnum:3333333333,
    status:true

}

var sushma={


    ifsc:'kvb00001',
    bal:99999999,
    accnum:3335555555555,
    status:true

}



var ravi={



    ifsc:'fdrl00001',
    bal:77777,
    accnum:88888888888,
    status:false
}



let bankobj=new Map()

bankobj.set('a',nagendra)
bankobj.set('b',ravi)
bankobj.set('c',sushma)

console.log(bankobj)
console.log('====================================')
console.log(bankobj.get('a'))

console.log('====================================')

console.log(bankobj.values())

console.log('====================================')
console.log(bankobj.keys())
console.log('==========================iterator key==========')

for (const veg of bankobj.keys())
{
    console.log('the key values \t'+veg)
}
console.log('==========================iterator values==========')

for(const va of bankobj.values()){
console.log(`the values \t ${va.accnum} ,${va.bal}, ${va.status}`)

}
console.log('==========================map entry==========')

for(let [key,val] of bankobj.entries()){

    console.log(`the key ${key} ,${val.accnum}`)
}

console.log('==========================For Each loop==========')

bankobj.forEach(function(v,k){
console.log(`the key value \t ${v.accnum}, ${v.bal},value \t ${k}`)
})

console.log('==========================For Each loop with  ARROW==========')

bankobj.forEach((v,k)=>console.log(` ARROW the key value \t ${v.accnum}, ${v.bal},value \t ${k}`)
)


///////////////

var Numbers=[['1','one'],['2','two'],['3','three']]

var numberMap=new Map(Numbers)

console.log(numberMap)