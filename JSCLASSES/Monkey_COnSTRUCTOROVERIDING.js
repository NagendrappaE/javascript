const Animal = require('./Animal')


class Monkey extends Animal{


    constructor(mnName,Weight){

        super(mnName)
        this.wit=Weight
     //   this.mnName=mnName
    }


    sing(){

        console.log(`the animal ${this.name} is having weight ${this.wit} is singing`)
    }

    static age(){

        console.log('inside the Monkey class age')
    }
}

let monkey=new Monkey('Monkey123',122)

monkey.sing()

Animal.age()

Monkey.age()