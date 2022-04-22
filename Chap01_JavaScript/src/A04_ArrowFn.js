
(function(){

    // 함수 리터럴. 함수 표현식
    let onAdd = function(x, y) {
        console.log(`${x} + ${y} = ${x + y}`);
    }

    let onMin = function(x, y) {
        return `${x} - ${y} = ${x - y}`;
    }

    onAdd(10, 20);
    console.log( onMin(10, 20) );
    console.log('')


    // ES6. 
    // 함수 리터럴 방식만 변경 가능
    // function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
    const onMulti = (x, y) => {
        const result = x * y;
        return result;
    }
    console.log(onMulti(10, 20));

    // 함수의 { } 내용이 return 구문 1개만 있는 경우는 {}와 return을 생략하고 1줄에 기술
    const onDiv = (x, y) => x / y;
    console.log(onDiv(10, 2));

    // => 뒤가 값이면 return, => 뒤가 실행문이면 리턴없이 그대로 실행
    const onOne = (x, y) => console.log(x / y);
    onOne(10, 2);

    // 매개변수가 1개이면 ()를 생략할 수 있다
    const onTwo = x => 2 ** x;
    console.log(onTwo(3));          // 2 * 2 * 2

    // 매개변수의 기본값을 설정할 수 있다 (일반 함수도 동일)
    const onThree = (x = 0, y = 0) => `${x} + ${y} = ${x + y}`
    console.log(onThree(10, 20));
    console.log(onThree());

})();