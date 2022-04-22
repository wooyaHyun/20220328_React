import { useState } from "react";

function A07WithComp(Comp, args) {
  // return Comp;    // 이 값 자체가 JSX 구문을 리턴하는 함수다.
  console.log(args);
  
  return function InnerComp(props) {
    const[name, setName] = useState(args.name);
    const [num, setNum] = useState(args.age);

    return (
      <Comp {...props} name={name} setName={setName} num={num} setNum={setNum} />
    )
  }

}
export default A07WithComp;
