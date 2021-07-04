import React, { useState } from "react";

import { useSelector, useDispatch } from "./store";
import "./App.css";
import Child from "./Child";

function App() {
  const oneNum = useSelector((state) => state.one.num);
  const dispatch = useDispatch();
  const [showChild, setShowChild] = useState(false);

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "ADD_ONE" })}>Add One</button>
      <p>One: {oneNum}</p>
      <button onClick={() => setShowChild((v) => !v)}>Trigger child</button>
      {showChild && <Child />}
    </div>
  );
}

export default App;
