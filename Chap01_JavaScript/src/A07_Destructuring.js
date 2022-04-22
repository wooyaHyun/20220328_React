

(function(){

    let one = {
        name: 'NolBu',
        age: 30
    }
    const x = one.name;
    const y = one.age;
    console.log(x, y);
    console.log('');


    let obj = {
        name: 'NolBu',
        age: 30
    }

    // 객체는 {}로 배열은 []로 꺼내쓴다.
    // 객체의 { } 내부의 변수 선언은 객체의 key와 동일한 이름이어야 한다.
    const {name, age} = obj;        // const name = obj.name; const age = obj.age와 동일
    console.log(name, age);

    // 이미 사용되는 변수가 있는 경우 별칭 사용 가능
    const {name: nickname, age: num} = obj;
    console.log(nickname, num);

    // 객체에 값이 없으면 기본값 설정 가능
    const {name: nick, age: cnt, address='Seoul'} = obj;
    console.log(nick, cnt, address);
    console.log('');


    // []로 정의. 별칭은 줄 수 없다.
    let ary = ['A', 'B', 'C'];
    const [a, b, c] = ary;
    console.log(a, b, c);

    // 기본값 설정은 가능하다
    const [a1, b1, c1, d = 100] = ary;
    console.log(a1, b1, c1, d);
    console.log('');

    // 일정 요소를 skip
    const [ , , c2] = ary;
    console.log(c2)


    console.log(obj, ary);

    
})();
