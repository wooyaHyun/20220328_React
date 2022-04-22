
import { num, onAdd, longNameFunction as long } from './A12_ExportModule'

console.log(num);
console.log(onAdd(10, 20));
console.log(long());
console.log('');


// default로 export된 값은 사용하는 곳에서 임의의 이름으로 지정할 수 있다
import addFunc, {name, x} from './A13_DefaultModule'
// import {name, x} from './A13_DefaultModule'

console.log( addFunc(10, 20) );
console.log(name);
console.log(x)

