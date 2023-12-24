import React, { useEffect } from "react";
function User({ user, onRemove, onToggle }) {
    // zl존성용123임의의 이름을 정함,새로운 객체함수 이름을 지정해주고 UserList에 배열을 가지고 옴
    useEffect(() => {
        console.log("컴포넌트가 화면에 나타남");
        console.log(user);
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
            console.log(user);
        };
    }, [user]);
    return (
        <div>
            {/* App.js에 넣어준 active에 폰트 색을 넣어주고 마우스 손가락모양으로 만들자
                 App.js에 user.username에 커서포인트와 색을 넣어줌 */}
            <b
                style={{
                    cursor: "pointer",
                    color: user.active ? "green" : "black",
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
                {/* user라는 객체안에 username만을 가지고 오자
                    users를 안쓰는 이유는 user만 색을 입히면 되기떄문에 users를 쓰게되면 전체를 다 가지고 가는건데
                    users에서 user만 가지고 가면 되기떄문에 user을 씀  */}
            </b>
            {/*user이라는 객체안에 email만 가져가겠다*/}
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    //app.js로 보낸 users배열들을 { users } 객체로 가지고옴
    //UserList로 함수를 정의를해준다
    // const users = [
    //     {
    //         id: 1,
    //         username: "velopert",
    //         email: "public.velopert@gmail.com",
    //     },
    //     {
    //         id: 2,
    //         username: "tester",
    //         email: "tester@example.com",
    //     },
    //     {
    //         id: 3,
    //         username: "liz",
    //         email: "liz@example.com",
    //     },
    // ];
    return (
        <div>
            {users.map((user) => (
                // user 이라는 임의의 이름을 만들어서 map으로 새로운 배열을 만듦
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
            {/* map을 이용해서 함수를 결과를 호출해서 새로운 배열을 생성함
                배열.map(()=>) */}
            {/* key={user.id}는 리액트에서 배열을 렌더링할때 key라는 props를 설정해야함
                    key값은 각 원소들마다 가지고 있는 고유값으로 설정해야한다
                    여기서는 id가 고유값이다
                 각 고유 원소에 key 가 있어야만 배열이 업데이트 될 때 효율적으로 렌더링 될 수 있기 때문이다. */}
        </div>
    );
}

export default React.memo(UserList);

//전역상태관리

//context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있습니다.
//context를 이용하면, 트리 단계마다 명시적으로 props를 넘겨주지 않아도 많은 컴포넌트가 이러한 값을 공유하도록 할 수 있습니다.
//액트 context는 컴포넌트들이 데이터(state)를 더 쉽게 공유할 수 있도록 해줍니다.
//데이터는 자주 업데이트할 필요가 없는 리액트 context에 위치해야 합니다.-->ontext는 전체적인 상태 관리를 위해 만들어진 시스템이 아니기 때문입니다. context는 데이터를 쉽게 사용하기 위해 만들어졌습니다.
//리액트 context는 리액트 컴포넌트를 위한 전역 변수와 같다고 생각하면 됩니다.
// 리액트 context를 사용하기 위한 네 단계는 다음과 같습니다.

// createContext 메서드를 사용해 context를 생성한다.
// 생성된 context를 가지고 context provider로 컴포넌트 트리를 감싼다.
// value prop을 사용해 context provider에 원하는 값을 입력한다.
// context consumer를 통해 필요한 컴포넌트에서 그 값을 불러온다.

// import { createContext } from "react";

// const LogContext = createContext('Hello');

// function App() {
//     return (
//       <NavigationContainer>
//         <LogContext.Provider value="Hello World">->컨텍스트를 만들게 되면 따라오는 프로바이더(공식)
//                                                  ->프로바이더는 컨텍스트 안에 있는 값을 사용힐떄 컴포넌트를 감싸주는 용도
//                                                  ->프로바이더에는 벨류값(props)을 정할수 있으며 여러 컴포넌트에 공유할수있는 값이다
//                                                  ->Provider 컴포넌트를 사용하면 이 컴포넌트 내부에 선언된 모든 컴포넌트에서 Context안의 값(value="Hello World")을 사용할 수 있다
//           <FeedsStack />
//         </LogContext.Provider>
//       </NavigationContainer>
//     );
//   }

//   function FeedsStack() {
//     return (
//       <View>
//         <LogContext.Consumer>-->Consumer는 Provider에서 제공한 값(value="Hello World")을 사용할 때에 해당 값에 접근하는 역할
//                             -->Provider 컴포넌트로부터 전달된 값(value="Hello World")을 사용하여 UI를 렌더링할 수 있다.
//                             -->함수 형태의 children prop을 사용하여 전역 상태를 받아와 사용할 수 있다
//           {(value) => <Text>{value}</Text>}
//         </LogContext.Consumer>
//       </View>
//     )
//Provider는 전체 애플리케이션에서 한 번만 사용되며, Consumer는 Provider로부터 값을 받아와 해당 값을 사용하는 부분에서 여러번 사용가능하다.

// useContext라는 Hook을 사용하면 Context의 Consumer라는 것도 꼭 사용할 필요가 없다

// function FeedsScreen() {
//     const value = useContext(LogContext);
//     return (
//       <View>
//         <Text>{value}</Text>
//       </View>
//     )
//   }

//     Context에서 유동적인 값 다루기
//     Provider를 사용하는 컴포넌트에서 Context의 상태를 관리하는 것보다는 Provider 전용 컴포넌트를 따로 만드는 것이 유지보수성이 더 높다
//     const LogContext = createContext();

// export function LogContextProvider({children}) {-->LogContextProvider라는 컴포넌트로 따로 만들어줌
//   const [text, setText] = useState('');
//   return (
//     <LogContext.Provider value={{text, setText}}>-->프로바이더 벨류에는 택스트와 셋텍스트를 넣어줌
//       {children}
//     </LogContext.Provider>
