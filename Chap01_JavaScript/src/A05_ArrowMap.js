
(function(){

    // 일반 함수. 
    function fn(){
        console.log('funcion');
    }
    fn();

    /* 이런 식으로는 사용불가
    fn() => {

    }
    */

    let ary = [10, 11, 100, 101, 1000];

    // 익명함수(이름이 없는 함수)
    ary.forEach(function(item, index) {
        console.log(item)
    });
    ary.forEach( (item, index) => {
        console.log(item)
    });
    console.log('')

    // map => 기존 배열의 요소를 하나씩 추출해서 필요한 작업 후 새로운 배열을 배열의 요소 수 만큼 만들어 리턴한다
    // react에서는 배열의 요소를 수정하는 경우 사용
    const one = ary.map( (item, index) => item * 2 )
    console.log(ary);
    console.log(one);
    console.log('');

    // filter => 기존 배열의 요소를 하나씩 추출해서 필요한 작업(비교 작업) 후 결과 true인 요소만 리턴한다
    // react에서는 배열의 요소를 삭제하는 경우 사용
    const two = ary.filter( (item, index) => {
        if(item % 2 === 0) return true;             // item이 리턴된다
        else return false;
    });
    console.log(ary);
    console.log(two);
    console.log('');

    // 추가. 리엑트에서는 배열에 새로운 값을 추가하는 경우 사용.
    const three = two.concat(30);
    console.log(two);
    console.log(three);
    console.log('');

    /*
    [ 
        {id: 0, value: 20},
        {id: 1, value: 22},
        ...
    ]
    */

    // { 를 arrow 함수의 시작으로 인식한다
    const four = ary.map( (item, index) => {
        return {id: index, value: item * 2}
    });
    console.log(four);
    console.log('')

    const five = ary.map( (item, index) => ({id: index, value: item * 2}) );
    console.log(five);

})();