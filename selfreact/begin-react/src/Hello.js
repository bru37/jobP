//값을정해줌

import React from "react"; //리액트컴포넌트를 만들고 불러올떄 import를 써줘야함
function Hello({ name, color, isSpecial }) {
    //Hello(props)->Hello컴포넌트에 name, color, isSpecial(App.js에 있음) 가지고 오고 싶을때 props자리에 값을 넣음
    return (
        <div style={{ color }}>
            {/* 위에서 props값을 받아음 */}
            {isSpecial && <b>*</b>}
            안녕하신가{name}
        </div>
        //isSpeciald이 false이면 false true이면 <b>*</b>
    );
}

Hello.defaultProps = {
    name: "이름이없다",
};

export default Hello; //Hello컴포넌트를 export내보내겠다는 뜻,App.js에 <Hello/>하면 UI에 보여짐

//props란 어떤한 값을 컴포넌트에 전달해줘야할떄 props를 사용한다.

//App.js에서 헬로우함수로 이름과 색을 구조분해 할당으로 가지고 오겠다
//App.js에서 스타일로 색을 가자기오고 이름도 가지고온다.
