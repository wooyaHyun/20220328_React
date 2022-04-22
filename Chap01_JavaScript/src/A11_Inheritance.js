

class Person {
    constructor(name, age, add){
        this.name = name;
        this.age = age;
        this.add = add;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}`);
    }
    getName() {
        return this.name;
    }
}

class Employee extends Person {
    constructor(name, age, add, job) {
        super(name, age, add);              // super => 부모 클래스를 의미. super(), super.toString()
        this.job = job;
    }

    toString() {
        console.log(`[Person] name=${this.name} age=${this.age} add=${this.add}, job=${this.job}`);
    }
}



let hungBu = new Person('HungBu', 20, 'Busan');
hungBu.toString();

const nolbu = new Employee('Nolbu', 20, 'Seoul', 'Manager');
nolbu.toString();
console.log( nolbu.getName() );

console.log(nolbu);     // [[Prototype]]


