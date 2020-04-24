const Animal = require('./Animal')



class Tiger extends Animal{


///methode overriding

stop(){

    console.log(`Inside the Tiger the spe`)
}

}

let tig=new Tiger('Tiger Panda')

tig.stop()

let an=new Animal('Elephant')

an.stop()