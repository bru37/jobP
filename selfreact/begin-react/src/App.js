import React, { useRef, useMemo, useCallback, useReducer } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users) {
    console.log("활성 사용자 수를 세는중.");
    return users.filter((user) => user.active).length;
}

const initialState = {
    inputs: {
        username: "",
        email: "",
    },
    users: [
        {
            id: 1,
            username: "velopert",
            email: "public.velopert@gmail.com",
            active: true,
        },
        {
            id: 2,
            username: "tester",
            email: "tester@example.com",
            active: false,
        },
        {
            id: 3,
            username: "liz",
            email: "liz@example.com",
            active: false,
        },
    ],
};
function reducer(state, action) {
    //onchang 구현
    switch (action.type) {
        case "CREATE_USER":
            return {
                users: state.users.concat(action.user),
            };
        case "TOGGLE_USER":
            return {
                users: state.users.map((user) =>
                    user.id === action.id ? { ...user, active: !user } : user
                ),
            };
        case "REMOVE_USER":
            return {
                users: state.users.filter((user) => user.id !== action.id),
            };

        default:
            return state;
    }

    // 위에서 리듀서 함수를 만들어어주어야함
}
// UserDispatch 라는 이름으로 내보내줍니다.
export const UserDispatch = React.createContext(null);

function App() {
    const [{ username, email }, onChange, reset] = useInputs({
        username: "",
        email: "",
    });
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const { users } = state;

    const onChang = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: "CHANGE_INPUT",
            name,
            value,
            //onchang라는 이벤트를 최적화 해주기 위해서 유즈 콜백을 사용함
            //디스페치는 type: "CHANGE_INPUT",에 이벤트를 발생시킴,디스패치 {중괄호} 내부를 action이라고함
            //onChang함수를 호출하면 위에 리듀스에서 "CHANGE_INPUT"타입 action으로 inputs: {을
            //        ...state.inputs,
            //        [action.name]: action.value, 설정해주자--->왜???
        });
    }, []);
    const onCreate = useCallback(() => {
        dispatch({
            type: "CREATE_USER",
            user: {
                id: nextId.current,
                username,
                email,
            },
        });
        nextId.current += 1;
    }, [username, email]);
    const onToggle = useCallback((id) => {
        dispatch({
            type: "TOGGLE_USER",
            id,
        });
    }, []);

    const onRemove = useCallback((id) => {
        dispatch({
            type: "REMOVE_USER",
            id,
        });
    }, []);
    const count = useMemo(() => countActiveUsers(users), [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChang}
                onCreate={onCreate}
            />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>활성사용자 수 : {count}</div>
        </>
    );
}

export default App;
