export class ReducerRegistry {
  _emitChange: Function | null = null;
  _reducers = {};

  get reducers() {
    return { ...this._reducers };
  }

  set emitChange(listener: any) {
    this._emitChange = listener;
  }

  setDefaultReducers = (reducers: any) => {
    this._reducers = reducers;
  };

  register(name: string, reducer: any) {
    this._reducers = { ...this._reducers, [name]: reducer };
    if (typeof this._emitChange === "function") {
      this._emitChange(this.reducers);
    }
  }
}

const reducerRegistry = new ReducerRegistry();

export default reducerRegistry;
