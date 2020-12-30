class Test{
    //constructor and its should be one per class
    constructor(name,age){
        this.nm=name,
        this.ag=age

        console.log('parameter'+this.nm)

    }
//getter

get name(){
    return this.nm
}
//setter

set name(xy){

    this.nm=xy
}
    //methods

    getData(){
        console.log('inside the first method')
        return 'boss tota'+this.ag+'name'+this.nm
    }

    //second method

    datacal(){
        console.log('hhhhhhhhh')
    }


}

var t1=new Test('ff',12)

t1.getData()

t1.datacal()

var t2=new Test('ff222',12)
t1.getData()

t1.name='nagendr'

t1.datacal()
console.log(t1.name)
