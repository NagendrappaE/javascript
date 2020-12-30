function asbaWebBean(price,quantity){

    this.priceValue=price,
    this.quantityValue=quantity,

    this.detail=function(){
        return this.priceValue*this.quantityValue

    }

}

var sbicard=new asbaWebBean(12,30)

var yesbank=new asbaWebBean(1000,12.00)

console.log(sbicard["priceValue"]+"the details"+sbicard.detail())

console.log(yesbank["priceValue"]+"the details"+yesbank.detail())
