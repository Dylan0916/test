import React from "react";

import reducer, { reducerName as key } from "./store/reducers/two";
import reducerInjector from "./utils/reducerInjector";
import { useSelector, useDispatch } from "./store";
import epic from "./store/epics/two";

function Child() {
  const twoNum = useSelector((state) => state.two.num);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Child</h3>
      <button onClick={() => dispatch({ type: "ADD_TWO" })}>Add Two</button>
      <p>two: {twoNum}</p>
    </div>
  );
}

const withReducer = reducerInjector({
  key,
  reducer,
  epic,
});

export default withReducer(Child);
