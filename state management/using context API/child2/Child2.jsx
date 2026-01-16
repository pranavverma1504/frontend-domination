import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Child2 = () => {
  const { message, setMessage } = useContext(DataContext);

  return (
    <div>
      <h4>Child2 Component</h4>
      <p>{message}</p>

      <button onClick={() => setMessage("Data changed from Child2")}>
        Change Message
      </button>
    </div>
  );
};

export default Child2;
