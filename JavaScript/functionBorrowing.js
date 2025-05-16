//call
/* const person={
    name:'ajay',
    greet:function(city){
console.log(`hii im ${this.name} from ${city}`)
    }
}
const anotherPerson={
    name:'vijay'
}
person.greet.call(anotherPerson,'kochi') */

//apply
/*const person={
    name:'ajay',
    greet:function(age,place){
        console.log(`hii my name is ${this.name} i'm ${age} years old , i'm from ${place}`)
    }
} const anotherPerson={
    name:'vijay'
}
person.greet.apply(anotherPerson,['19','malappuram']) */

//bind
/*const person={
    name:'ajay',
    greet:function(age,place){
        console.log(`hii i'm ${this.name} im from ${place} .and im ${age}teen years old`)
    }
}
const anotherPerson={
    name:'vijay'
}
let dream=person.greet.bind(anotherPerson,['chennai','19'])
dream() */