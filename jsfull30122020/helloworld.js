console.log('Hellooooo');

var person = "John Doe";

//objects can be created using literal

var person={

    name:"Nagendra",
    age:28,
    color:"white and block",

   fullname : function() {

  //  console.log(this.name)

  return this.name+this.age
    },

    eyeColor:function(someinp){

        this.color=someinp

        return 'The eye color'+this.color 

    }

}

console.log(person.fullname())

var v=person.eyeColor('nnnn')

//accessing the properties

var some=person.name+"is the guy having "+person.eyeColor(person.age)

console.log(some)

//access the properties square brackets with the double quotes

var vvv=person["name"]
console.log('d'+vvv)




//another way of creating the object

var human=new Object()

human.cast='hindu'
human.gender='male'
human.height=12
human.calage=function(someval){

    return 'iam ok'+someval
}


console.log(human["cast"]+"method "+human.calage(human.gender))


console.log(v)


console.log(Object.values(human))


document.getElementById('myval').innerHTML=JSON.stringify(human)
