import React, { useState } from "react";
function InputSample() {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onReset = () => {
        setText("");
    };
    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:{text}</b>
            </div>
        </div>
    );
}

export default InputSample;

// input 특징
// input의 onChange를 사용하면 이벤트 객체인 e(event)를 파라미터로 받아옴
// 이 객체의 e.target은 이벤트가 발생한 DOM인 input DOM을 가리킨다
// e.target.value를 조회하면 현재 input의 value값을 알수있다, value값을 설정해줘야 상태가 바뀌었는지 input으로 알수가 있다.

//const [state, setState] = useState()

//state->현재 상태를 나타내는 변수값(상태값)
//setState->상태값을 갱신해주는 setter함수이다
//()->상채의 초기 값

//const [현재변수상태값, 상태값을갱신하는함수] = useState(상태초기값)
