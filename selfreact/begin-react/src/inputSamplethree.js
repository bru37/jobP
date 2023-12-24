import React, { useState, useRef } from "react";

function InputSampleThree() {
    const nameInput = useRef();
    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });

    const { name, nickname } = inputs;
    //현재의 상태값을 나타내기 떄문에 inputs를 가져와야함,객체화해서
    const onChange = (e) => {
        const { value, name } = e.target;
        //onChange 같은 경우 event 를 가지고 e.target은 input에 value와name을 타겟으로 가지고옴
        setInputs({
            // setInputs은 inputs변수를 갱신해주는 함수
            ...inputs,
            //setInputs에는 nickname이 없기 떄문에 ...inputs으로 가지고옴(state에 불변성을 지키기 위해)
            [name]: value,
            //name이라는 배열에 value가지고 옴
        });
    };

    const onReset = () => {
        setInputs({
            //상태를 갱신해줘야하기 떄문에??setInput?
            name: "",
            nickname: "",
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSampleThree;

// const [inputs, setInputs] = useState()

// inputs은 현재변수를 의미한다
// setInputs은 해당 변수를 갱신해주는 함수
