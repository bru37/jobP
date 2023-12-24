import React from "react";
function CreateUser({ username, email, onChange, onCreate }) {
    //구조분해할당은 객체안에있는 값들을 원하는 변수에 대입할수있음,객체를 구조분해할당을할떄 키값을 넣는것같음
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                //온체이지는 인풋에 글을 등록하게해줌
                value={username}
                //벨류가 인풋창에 보여지는것을 의미하면 유저네임이 보여짐
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
                //벨류가 인풋창에 보여지는것을 의미하며 이메일이 보여짐
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(CreateUser);

//새로운 검색창이 필요하기 떄문에 계정명이라는 input창과 이메일이라는 input창이 필요하고 등록이라는 버튼이 필요하다
//그래서 Createuser.js라는 파일을 만들어서 App.js에 보냄
// function이라는 함수에 함수명 CreateUser를 하고 { username, email, onChange, onCreate } 객체를 알리는 {}안에 username, email, onChange, onCreate 객체들을 App.js에서 가지고옴
//input창안에 name, placeholder 키에 username,계정명,email,이메일 이라는 벨류를 준다
