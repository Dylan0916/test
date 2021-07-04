export interface State {
  num: number;
}

export const defaultState: State = {
  num: 0,
};

export const reducerName = "two";

export default function two(state = defaultState, action: any) {
  switch (action.type) {
    case "ADD_TWO": {
      return {
        ...state,
        num: state.num + 1,
      };
    }
    default: {
      return state;
    }
  }
}
