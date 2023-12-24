import React, { useState } from "react";
//name과nickname두개를 만들어야 하기 때문에 useState를 이용해서 두개를 하나로 묶음
//동적인-->움직임(랜더링 변화가있는 부분),리액트에서 증가 감소하는 동적인 변화를 나타내고 싶알떄 유즈스테이드를사용,네임과닉네임에 변화 동시에 보여주기위해서 묶음
function InputSampleTwo() {
    const [state, setState] = useState({
        name: "",
        nickname: "",
    });
    //input창에 name과nickname(임의의 이름 )을 "" 공백을 사용한다는 뜻
    //UI input에 name 과 nickname을 나타내며 "" 공백을 나타난다 "123"을 적으면 UI input에 123이 적용되어있음 useState에(초기값)
    /* 
        const state = {
            name: "",
            nickname: ""
        }
        state.name = '차필우"

        conosle.log(state) => {name: "차필우", nickname: ""}


        setState({
            name"차필운"
        })

        console.log(state) => {name"차필우"}

        setState({
            ...state, ({name:"", nickName:""})
            name: "차필우"
        })

        console.log(state) => {name: "차필우", nickname: ""}


        ** 상태가 왜 필요할까요?
        리랜더를 통해 UI의 동적인 효과를 일으키기 위해서

        state가 변경이 되면 리랜더를 합니다.
        리랜더 -> 화면을 다시 그린다

        컴포넌트함수 InputSampleTwo -> 랜더함수 -> 리랜더 == 랜더함수를 다시 실행하는 것

        state 사용이유
        1. 리랜더가 되어도 초기화 되지 않는다
        2. 상태 변경이 되면 랜더 함수를 다시 실행시킨다.


        ** 상태를 변경하는 방법
        1. 일반 변수는 재할당 (=)을 통해서 값을 변경할 수 있지만
        2. state는 setState 함수의 인자로 전달된 값만 () 변경이 가능하다
        3. 따라서 기존 상태를 유지하기 위해 전개 연산자(...)을 이용하여 기존의 속성 값을 복사해 올 필요가 있다


    */

    //state에 name과nickname을 설정하고(가짐) 이벤트를 발생시킴
    const { name, nickname } = state;
    //문자열이 아니라 객체 형태로->state가 가짐
    //state의 value값을 유지하기 위함입니다. state가 변하면 렌더링이 다시 일어나고, 그 때마다 state에 지정된 value값이 없다면 입력했던 값이 지워집니다.
    const onChange = (e) => {
        const { name, value } = e.target; //e.target에서 { value(""), name } 을 추출함,클릭하는것이 타켓이 된다 인풋안에 인풋안에 클릭 이벤트가 . 발생한다 내가 클릭한 곳에서
        //on+임의의명칭->내가 타켓한 이벤트를 이벤트적용시킴,네임을 타켓해서 네임을 적었을떄 벨류로 인풋에서 보이게해줌
        //value는 조회하면 현재 input의 value값을 알수있다,value를 설정하므로써 UI에 실시간으로 값을 알수가 있다

        setState({
            ...state, //state객체를 전체 복사함(범위가???)
            [name]: value, //name키를 가진 가진 값을 value로 설정,input-->기본적으로 value 설정
            //[name],객체에 값을 할당할때 동적인 키값으로 값을 할당할때 대괄호를 감싸줍니다
        }); //리액트 문법이라고 생각하자
    };
    //Reset도 두개를 하나에다가 묶어야 하므로
    //네임괴닉네임 둘다 지워야히므로 두개다 묶어서 표현
    const onReset = () => {
        setState({
            name: "",
            nickname: "",
        });
    };
    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                //이름을 인풋에서보여줌
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
                //닉네임을 인풋에서 보여줌
            />
            <button onClick={onReset}>초기화</button>
            <br />
            <b>값: </b>
            {name}({nickname})
        </div>
    );
}

export default InputSampleTwo;

//const [state, setState] = useState()

//state->현재 상태를 나타내는 변수값(상태값)
//setState->상태값을 갱신해주는 setter함수이다
//state로 설정되어있는 값을 셋스테이트로 변경해준다
//()->상채의 초기 값

//const [현재변수상태값, 상태값을갱신하는함수] = useState(상태초기값)
