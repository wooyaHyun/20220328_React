

function onAdd(x, y) {
    return x * y;
}

let name = 'NolBu';
let x = 100;

// default는 파일에서 1개만 지정 가능
export default onAdd;
export {name, x}