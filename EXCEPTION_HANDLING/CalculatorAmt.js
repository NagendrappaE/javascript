 class Cal{

    constructor(){

    }

    amoutToBlocked(shares,bidQuantity){

        try {
            var amount=shares*bidQuantity
            return amount
        } catch (error) {
            console.log(error)
        }
    }

}

var am=new Cal()

let val=am.amoutToBlocked(10,34)

console.log('the calculated amount '+val)

module.exports = Cal
