import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux";

import { State as TwoState } from "./reducers/two";
import store from "./createStore";

interface AsyncReducer {
  two: TwoState;
}

export type RootState = ReturnType<typeof store.getState> & AsyncReducer;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
