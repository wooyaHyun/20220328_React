
// ES6 
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`${this.name} / ${this.age}`);
  }
};

const nolbu = new User('Nolbu', 30);
const hungbu = new User('Hungbu', 30);

console.log(nolbu);
console.log(hungbu);

nolbu.info();
hungbu.info();
