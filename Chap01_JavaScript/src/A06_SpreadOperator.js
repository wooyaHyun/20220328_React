
// ES6
(function(){

    console.log([10, 11, 100]);
    console.log(...[10, 11, 100]);          // spread 연산자. 각 요소를 각각의 값으로 풀어서 호출한다.
    console.log('NolBu');
    console.log(...'NolBu');

    console.log('');

    // ...rest는 나머지 매개변수를 의미. 이전의 argumensts라는 내부 변수와 비슷 
    function spreadFun(a, b, c, d, e, ...rest) {
        console.log(`a => ${a}`);
        console.log(`b => ${b}`);
        console.log(`c => ${c}`);
        console.log(`d => ${d}`);
        console.log(`e => ${e}`);
        console.log(`rest => ${rest} / ${rest.length}`);
    }

    spreadFun(0, ...[10, 20, 30], 40, ...[50, 60, 70]);
    console.log('')


    // 배열 합치기.
    let aryOne = [10, 20, 30];
    var aryTwo = [1, 2, 3, ...aryOne];
    console.log(aryTwo);
    console.log('');


    // Object
    let objOne = {
        id: 1,
        name: 'NolBu'
    };

    let objTwo = {
        id: 2,
        address: 'Seoul',
        ...objOne               // 중복 값은 뒤에 기술한 값으로 변경된다.
    }
    console.log(objTwo);

    // 리엑트에서 객체의 값을 추가, 수정하는 방식.
    let objThree = {
        ...objOne,
        id: 3,
        address: 'InChen',
    }
    console.log(objThree);


})();