
// ES6
(function(){

    let name = 'NolBu';
    console.log('My Name is ' + name);
    console.log('My Name is ', name);
    console.log(`My Name is ${name}`);          // => string


    let obj = {
        name: 'HungBu',
        age: 25,
        child: ['one', 'two'],
        info: {
            tel: '010-1234-5678',
            add: 'Seoul'
        },
        toString: function(){
            console.log(this.name + '님의 나이는 ' + this.age + '세 입니다');

            // ES6 - tempate 문자열
            console.log(`${this.name}님의 나이는 ${this.age}세 입니다`);
            console.log(`${this.name}님의 거주지는      ${this.info.add}이고 
        전번은 ${this.info.tel}입니다`)
        }
    }
    
    obj.toString();

})();