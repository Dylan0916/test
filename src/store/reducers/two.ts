export interface State {
  num: number;
  isFetching: boolean;
}

export const defaultState: State = {
  num: 0,
  isFetching: false,
};

export type TwoReducerType = typeof two;

export const reducerName = "two";

function two(state = defaultState, action: any) {
  switch (action.type) {
    case "ADD_TWO": {
      return {
        ...state,
        num: state.num + 1,
      };
    }
    case "FETCH_TWO_REQUEST": {
      return {
        ...state,
        isFetching: true,
      };
    }
    case "FETCH_TWO_SUCCESS": {
      return {
        ...state,
        isFetching: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default two;
