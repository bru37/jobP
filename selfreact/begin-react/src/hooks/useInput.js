import { useCallback, useState } from "react";

function useInputs(initialForm) {
    //App.js에서 useInputs가username,email을 나타내고 있어서 initialForm=username,email 이다.
    //username,email을 itialForm 으로 압축??했음
    const [form, setForm] = useState(initialForm);
    //initialForm=username,email을 초기값으로 가짐
    //초기값은 컴포넌트가 처음 렌더링될 때 한번만 사용되고 딱 한번이다 그 이후에는 form이setForm에 의해서 값이 갱신된다.
    const onChang = useCallback((e) => {
        const { name, value } = e.target;
        setForm((form) => ({ ...form, [name]: value }));
    }, []);
    //의존성배열이 비어있는이유:onChang함수가 처음 렌더링될 떄만 생성되고 그 이후 랜더링에서는 새로운 함수를 생성하지 않겠다(동일한 함수를 재사용하겠다라는 의미)
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    //useCallback은 매번 렌더링할때 새로운 함수를 생성하지 않고 의존성배열에 명시된 값들이 변경될 떄만 함수를 새로 생성함
    //initialForm값이 변경될 떄마다 새로운 함수를 생성하겠다
    return [form, onChang, reset];
}

//커스텀 훅
//useState,useEffect,useReducer,useCallback-->훅을 사용해서 원하는 기능을 구현함

//매개변수는 함수에 전달되는 값을 저장하는 변수입니다
//함수는 매개 변수를 사용하여 외부에서 전달된 값을 내부에서 활용할 수 있다.
//매개변수는 함수를 선언할 떄 정의되며 함수는 호출할 때 전달되는 값들에 해당한다

//의존성배열
//useEffect에서 사용되는 의존성 배열은 useEffectrk가 실행되어야 하는 조건을 지정하는데 사용된다
//의존성배열은 useEffect 내부에서 참조하는 변수나 값들을 포함하여 배열에 있는 값들 중 하나라도 변경되었을 때에만 useEffect가 실행됩니다.
//의존성배열은 useEffect가 의존하는 값들이 들어가있음,의존성배열이 비었다면 useEffectr가 처음 렌더링될 때만 실행이되고 이후에는 실행이안됌
//의존성배열에값은 주로 컴포넌트의 상태(state) 또는 프로퍼티(props)이다-->state 또는 props값들이 변경될떄마다 useEffect가 실행됌
//useCallback에도 의존성배열을 사용하는대 매번 랜더링할떄 새로운 함수를 생성하지 않고 의존성배열에 명시된 값들이 변경 될 떄만 함수를 새로 생성함

//useReducer

//문법
//const [state, dispath] = useReducer(reducer, initialArg, init)->사용할 떄 최상단에서 호출 가능

//예)
//function reducer(state, action){ }
//function Mycomponent(){
//const [ state, dispatch] = useReducer(reducer,{age37});
//}
//initialArg--->초기값
//init(선택사항)--->초기값을 반환하는 초기화 함수 초기화 함수다 전달되지 않은경우에는 초기값은 initialArg로 설정된다

//useReducer은 두 값을 가지는 배열을 반환한다
//현재 상태-->첫 번쨰 랜더중 init(initialArg) 또는 initialArg로 설정된다
//dispath--> 상태를 다른 값으로 바꾸고 재랜더링을 발생시킴--->dispath함수의 인자로 액션을 전달한다

//예)
// const [state, dispatch] = useReducer(reducer,{age:37})
// function({type:'incremented_age'})

//파라미터
//action---> 사용자에 의해 수행되는 액션
//하나의 액션은 보통 그것을 구별할 수있는 타입속성을 가지고 있는 오브젝트이고 선택적으로 다른 속성을 추가적인 정보와 함께 사용가능
//action은 어떤 변화를 나타내는 액션을 받아 새로운 상태로 반환함-->상태를 변경시키는 이벤트라고 생각하면 됌
//예를들어 사용자가 어떤 버튼을 클릭하면 그에 대응하는 액션을 발생시키고 이 액션은 reducer에 전달되어 상태를 업데이트하게됌
//action의 객체는 일반적으로 이런 예를 가진다
//{
//     type: 'INCREMENT',-->타입은 어떤 종류의 액션이 발생했는지를 나타내는 문자열
//     payload: 1-->페이로드는 액션과 관련된 데이터를 포함하는 부분
//   }-->reducer는 이 type을 바탕으로 어떤 동작을 수행할지 결정합니다.

export default useInputs;


