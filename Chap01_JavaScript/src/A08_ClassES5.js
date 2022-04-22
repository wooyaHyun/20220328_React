
(function(){
    
  function User(name, age) {
    this.name = name;
    this.age = age;

    this.info = function() {
      return `${this.name} - ${this.age}`;
    }
  }

  const obj = {
    name: 'BangJa',
    age: 20,
    info: function() {
      return `${this.name} - ${this.age}`;
    }
  }

  const nolbu = new User('NolBu', 30);
  const hungbu = new User('HungBu', 20);

  console.log(obj);
  console.log(nolbu);
  console.log(hungbu);
    
})();
