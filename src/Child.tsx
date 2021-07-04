import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules-react";

import { useSelector, useDispatch } from "./store";
import getTwoModule from "./store/modules/getTwoModule";

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

export default function Dynamic() {
  return (
    <DynamicModuleLoader modules={[getTwoModule()]}>
      <Child />
    </DynamicModuleLoader>
  );
}
