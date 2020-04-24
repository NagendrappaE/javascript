const CalC = require('./CalculatorAmt')

try {
    var num= (10/n)*23
console.log('the vale'+num)
} catch (error) {
    console.log(error)
}

/////////////

var calculot= new CalC()
try {
    console.log('calculation  START::::::::')
 let totalAmount=   calculot.amoutToBlocked(222,45)
console.log('inside the method TOTAL :::::::'+totalAmount)

} catch (error) {
    console.log(error)
}

