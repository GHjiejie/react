import { useCallback, useContext } from "react";

const useCallbackDemo = () => {
  const handleClick = useCallback(() => {
    console.log("handleClick rend");
  }, []);

  console.log("Component re-rendered");

  return (
    <div>
      <h1>useCallback</h1>
      <button onClick={handleClick}>useCallback</button>
    </div>
  );
};

export default useCallbackDemo;
