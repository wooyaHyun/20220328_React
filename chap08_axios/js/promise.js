function sleep(ms) {
  const wakeUp = Date.now() + ms;
  while(Date.now() < wakeUp) {}
};

/*
function normalFunc() {
  console.log('start');

  sleep(2000);

  console.log('end');
}
normalFunc();
console.log('');
*/

/*
function func(x, callback) {
  console.log('Start', x);
  callback();
  console.log('End');
}

const timeFunc = () => {
  setTimeout(() => {
    let result = 100;
    console.log('처리 완료 01', result);

    setTimeout(() => {
      let x = 200;
      result = result + x;
      console.log('처리 완료 02', result);

    }, 1000);

  }, 2000)
}
func(10, timeFunc);
*/

function promiseFunc(ms) {
  return new Promise( (resolve, reject) => {
    
    if(ms < 1000) reject(new Error('시간이 너무 짧음'));  // catch의 익명함수를 의미

    setTimeout(() => {
      resolve(ms);         // 성공적 실행된 경우 실행될 함수. then의 익명함수를 의미
    }, ms);
  })
}
/*
console.log('Start');

promiseFunc(2000)
// resolve 함수가 전달된 값을 받는 함수
.then( (data) => {      // 이 익명함수가 resolve
  console.log(data);

  return promiseFunc(data + 1000);   // 다음 then이 받아 처리한다
})
.then( data => console.log(data) )
// reject 함수가 전달한 값을 처리하는 함수
.catch( (error) => {    // 이 함수가 리젝트
  console.log(error.message)
});

console.log('End')
*/

// 2017
async function syncFunc() {
  console.log('Start')
  try {
    const data01 = await promiseFunc(2000);
    const data02 = await promiseFunc(data01 + 1000);

    console.log(data01)
    console.log(data02)
  } catch(error) {
    console.log(error.message);
  }
  console.log('End')
}

syncFunc()