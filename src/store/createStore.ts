import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import reducerRegistry from "./reducerRegistry";
import rootEpic from "./epics";
import one from "./reducers/one";

export const defaultReducers = { one };

declare const window: any;

export const epicMiddleware = createEpicMiddleware();
const reducer = combineReducers(reducerRegistry.reducers);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

const combine = (reducers: any): any => {
  return combineReducers(reducers);
};

reducerRegistry.setDefaultReducers(defaultReducers);
reducerRegistry.emitChange = (reducers: any) => {
  store.replaceReducer(combine(reducers));
};

export default store;
