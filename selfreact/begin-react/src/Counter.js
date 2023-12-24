//조건식을 만들어서 App.js로 보냄

import { useReducer } from "react";

// import React, { useState } from "react";
// function Counter() {
//     const [number, setNumber] = useState(0);
//     //Counter버튼을 클릭하면 특점 함수가 호출되도록 하자
//     const onIncrease = () => {
//         setNumber((prevNumber) => prevNumber + 1);
//     };

//     const onDecrease = () => {
//         setNumber((prevNumber) => prevNumber - 1);
//     };

//     return (
//         <div>
//             {/* {number}->갱신된 현재 상태값을 렌더링해줌 */}
//             <h1>{number}</h1>
//             {/* onIncrease,onDecrease를 버튼에다가 연결을 해주자 */}
//             <button onClick={onIncrease}>+1</button>
//             <button onClick={onDecrease}>-1</button>
//         </div>
//     );
// }
function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}
function Counter() {
    const [numberA, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => {
        dispatch({ type: "INCREMENT" });
    };
    const onDecrease = () => {
        dispatch({ type: "DECREMENT" });
    };
    return (
        <div>
            <h1>{numberA}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;

// const [number, setNumber] = useState(0);
//number : 임의의 명칭 가능, 현재 변수를 의미한다
//setnumber : 해당 변수를 갱신해주는 함수를 의미한다
