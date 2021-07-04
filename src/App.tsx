import React, { useState } from "react";

import { useSelector, useDispatch } from "./store";
import "./App.css";
import Child from "./Child";

function App() {
  const oneNum = useSelector((state) => state.one.num);
  const isFetching = useSelector((state) => state.one.isFetching);
  const dispatch = useDispatch();
  const [showChild, setShowChild] = useState(false);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "FETCH_ONE_REQUEST" })}>
        Fetch One
      </button>
      <button onClick={() => dispatch({ type: "ADD_ONE" })}>Add One</button>
      <p>isFetching: {`${isFetching}`}</p>
      <p>One: {oneNum}</p>
      <button onClick={() => setShowChild((v) => !v)}>Trigger child</button>
      {showChild && <Child />}
    </div>
  );
}

export default App;
