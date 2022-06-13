class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log(`${this.name} says hello!`);
    }

}

const guy1 = new Person('Peter', 33);
const guy2 = new Person('John', 45);

guy1.sayHello();
console.log(guy2);