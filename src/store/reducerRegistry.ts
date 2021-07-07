import { combineReducers } from "redux";
import { ReducerType, DefaultReducers, AsyncReducer } from "./";

type EmitChange = (reducers: any) => void;

export class ReducerRegistry {
  _emitChange: EmitChange | null = null;
  _reducers = {} as ReducerType;

  set emitChange(listener: EmitChange) {
    this._emitChange = listener;
  }

  setDefaultReducers = (reducers: DefaultReducers) => {
    this._reducers = reducers;
  };

  combine = (reducers: ReducerType) => {
    return combineReducers(reducers);
  };

  register = (name: keyof AsyncReducer, reducer: any) => {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (typeof this._emitChange === "function") {
      this._emitChange(this._reducers);
    }
  };
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
