const stuData=['nagendra','ravi','sushma','vrus',0,112,true]


console.log('the aray elemnts'+stuData)
console.log('the first elemnet '+stuData[0]+'the length of first'+stuData[0].length)

console.log('the first elemnet '+stuData[5]+'the length of first'+stuData[5].length)

console.log('the  studentarray length '+stuData[(stuData.length-1)/2])



////////////////////////////////

//shift
const numbers=['one','two','three','four','five','six']

console.log(numbers.shift())



console.log('the element'+numbers)


//unshift
numbers.unshift('NAGENDRA')
console.log('the unshift '+numbers)

//end or pop
numbers.pop()

console.log('the  pop elemnts '+numbers)

//push  elemnts

numbers.push('seven')
numbers.push('nine','ten')
numbers.push(stuData)
console.log('the push operaion'+numbers)

//middle or splice

numbers.splice(2,3,'A','B','C','D')

console.log('after slice  the elemnet availabe in array'+numbers)
