class  Animal {

constructor(nm){
this.speed=100
this.name=nm
}

run(speed){
this.speed=speed
    console.log(`the animal ${this.name} runs with the speed of ${this.speed}`)
}

stop(){
this.speed=0
console.log(`the animal stands with ${this.speed}`)

}

static age(){
    this.ag=34
       console.log(`the   age of the  ${this.name} is  ${this.ag}`)
   }

}

let an = new Animal('rabbit')

an.stop()
an.run(2222)


class Lion extends Animal
{

hide(){
    console.log(`the animal ${this.name}`)
}



}

let  lion= new Lion('Liond')

lion.hide()

Animal.age()

module.exports = Animal
