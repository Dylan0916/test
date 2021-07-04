import one from "./reducers/one";

export class ReducerRegistry {
  _emitChange: Function | null = null;
  _reducers = { one };

  get reducers() {
    return { ...this._reducers };
  }

  set emitChange(listener: any) {
    this._emitChange = listener;
  }

  register(name: string, reducer: any) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (typeof this._emitChange === "function") {
      this._emitChange(this.reducers);
    }
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
