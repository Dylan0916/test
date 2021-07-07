import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux";

import store from "./createStore";
import { State as TwoState } from "./reducers/two";

interface AsyncReducer {
  two: TwoState;
}

export type RootState = ReturnType<typeof store.getState> & AsyncReducer;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
