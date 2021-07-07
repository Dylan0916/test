import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  TypedUseSelectorHook,
} from "react-redux";

import store, { defaultReducers } from "./createStore";
import { TwoReducerType } from "./reducers/two";

export interface AsyncReducer {
  two: TwoReducerType;
  three: TwoReducerType;
}

export type DefaultReducers = typeof defaultReducers;
export type ReducerType = DefaultReducers & Partial<AsyncReducer>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
