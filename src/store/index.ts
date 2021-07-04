import { combineReducers } from "redux";
import { createStore, IModuleStore } from "redux-dynamic-modules";
import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux";
import getOneModule from "./modules/getOneModule";

import one from "./reducers/one";
import two from "./reducers/two";

declare const window: any;

const rootReducer = combineReducers({ one, two });
const store = createStore(
  {
    // advancedComposeEnhancers:
    //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //   window.__REDUX_DEVTOOLS_EXTENSION__(),
  },
  getOneModule()
);

console.log(store);
//   rootReducer,
//   // @ts-expect-error
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
