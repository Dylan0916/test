import { combineReducers, createStore } from "redux";
import reducerRegistry from "./reducerRegistry";

declare const window: any;

const reducer = combineReducers(reducerRegistry.reducers);
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const combine = (reducers: any): any => {
  return combineReducers(reducers);
};

reducerRegistry.emitChange = (reducers: any) => {
  store.replaceReducer(combine(reducers));
};

export default store;
