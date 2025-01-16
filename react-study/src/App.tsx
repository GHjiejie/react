import { useState } from "react";
import "./User.css";

const Button = () => {
  return (
    <>
      <button>Click me</button>
    </>
  );
};

type UserProps = {
  userInfo: {
    name: string;
    message: string;
  };
  onMessageChange: (newMessage: string) => void;
};

// 编写样式

const User = (props: UserProps) => {
  console.log(props);
  const setNewMsg = () => {
    props.onMessageChange("我是子组件传递给父组件的消息");
  };

  return (
    <div className="user">
      <h1>hello</h1>
      <h2>{props.userInfo.name}</h2>
      <button onClick={setNewMsg}>Click me</button>
    </div>
  );
};

function App() {
  const [message, setMessage] = useState<string>("hello , my name is jie!");

  const handleMessageChange = (newMsg: string) => {
    setMessage(newMsg);
  };
  return (
    <>
      <User
        userInfo={{ name: "jie", message: message }}
        onMessageChange={handleMessageChange}
      ></User>
      <h2>{message}</h2>
    </>
  );
}

export default App;
