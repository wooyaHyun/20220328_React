
// 변수.
var nickname = 'NolBu';
console.log('nickname=> ' + nickname + ' typeof()=> ' + typeof(nickname));

// 선언한 변수를 재 선언해도 에러가 아니다.
var nickname = 30;
console.log('nickname=> ' + nickname + ' typeof()=> ' + typeof(nickname));

// var 변수는 함수 이외의 {} 스코프를 갖지 않는다.
if(true) {
  var nickname = true;
  console.log('nickname=> ' + nickname + ' typeof()=> ' + typeof(nickname));
}

console.log('nickname=> ' + nickname + ' typeof()=> ' + typeof(nickname));
console.log('');


// ES6. let, const
let age = 30;
console.log('age=> ' + age + ' typeof()=> ' + typeof(age));

age = 'HungBu';
console.log('age=> ' + age + ' typeof()=> ' + typeof(age));

// let로 선언한 변수는 동일한 이름으로 var, let, const 어떤 키워드로도 재 선언이 안된다
// var age = 20;

// let로 선언한 변수는 모든 { }의 스코프를 갖는다
if(true) {
  let age = 100;        // 지역변수
  console.log('age=> ' + age + ' typeof()=> ' + typeof(age));
}

console.log('age=> ' + age + ' typeof()=> ' + typeof(age));
console.log('');


// ES6. const => 상수
const MY_PI = 3.141519;
console.log('MY_PI=> ' + MY_PI + ' typeof()=> ' + typeof(MY_PI));

// 상수는 값을 변경할 수 없다.
// MY_PI = 100;

// 상수는 선언과 함께 초기화가 필수
// const MY_X;

const user = {
  name: 'NolBu',
  age: 20
};

// user의 번지수 값이 변경되는 것은 아니므로 OK
user.name = 'BangJa';
console.log(user);
