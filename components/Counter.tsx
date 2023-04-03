import {useState} from "react";

/**
 * 숫자를 +1 하거나 -1 할 수 있는 카운터 컴포넌트입니다.
 * @constructor
 */
function Counter() {

  // 컴포넌트(지역) 상태 관리 : 카운터
  const [count, setCount] = useState(0);

  // 컴포넌트 상태를 변경하는 함수들 정의
  const increase = () => setCount(prevState => prevState + 1);
  const decrease = () => setCount(prevState => prevState - 1);

  return (
    <div>
      <div>
        <b>Count : </b>{count}
      </div>
      <button onClick={increase}>
        +1
      </button>
      <button onClick={decrease}>
        -1
      </button>
    </div>
  );
}
export default Counter;
