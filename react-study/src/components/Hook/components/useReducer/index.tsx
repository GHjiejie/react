import { useReducer } from "react";

// reducer函数接收来个参数, 第一个是preState, 第二个是action, 返回一个新的state;
// action实际上是和你的dispatch方法传递过来的参数是一样的, 你可以在这里面做一些逻辑判断, 然后返回一个新的state
function reducer(preState, action) {
  console.log("state", preState);
  console.log("action", action);
  switch (action.type) {
    case "updateAge":
      return {
        ...preState,
        age: action.payload.age,
      };
    case "updatePhone":
      return {
        ...preState,
        phone: action.payload.phone,
      };
    case "updateName":
      return {
        ...preState,
        name: action.payload.name,
      };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    age: 42,
    name: "zhengjie",
    phone: "123456789",
  });

  return (
    <>
      <h3>首先是怎么使用?</h3>
      <p>看useReducer的declear文件,他里面会声明有哪些参数</p>
      <button
        onClick={() => dispatch({ type: "updateAge", payload: { age: 99 } })}
      >
        updateAge
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "updatePhone",
            payload: {
              phone: "987654321",
            },
          })
        }
      >
        updatePhone
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "updateName",
            payload: {
              name: "jie",
            },
          })
        }
      >
        updateName
      </button>
      <p>Hello! You are {state.age}.</p>
      <p>Your name is {state.name}.</p>
      <p>Your phone is {state.phone}.</p>
    </>
  );
}
