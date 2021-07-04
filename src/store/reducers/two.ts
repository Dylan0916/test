export interface State {
  num: number;
  isFetching: boolean;
}

export const defaultState: State = {
  num: 0,
  isFetching: false,
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
