//값을 정해줌

import React from "react";
function Wrapper({ children }) {
    const style = {
        border: "2px solid black",
        padding: "16px",
    };

    return <div style={style}>{children}</div>;
    //Hello.js에서 스타일을 가지고 오고 App.js에서 children을 가지고옴
}

export default Wrapper;

//App.js에 Wrapper함수 값을 children props를 이용해서 전부 다 가지고 온다
//쓰이는곳(app.js)에서 값을 정함--->props(부모)
//쓰임 당하는곳?(Hello.js or Wrapper.js)에서 값을 정함--->children
