export const defaultState = {
  num: 0,
  isFetching: false,
};

export default function one(state = defaultState, action: any) {
  switch (action.type) {
    case "ADD_ONE": {
      return {
        ...state,
        num: state.num + 1,
      };
    }
    case "FETCH_ONE_REQUEST": {
      return {
        ...state,
        isFetching: true,
      };
    }
    case "FETCH_ONE_SUCCESS": {
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
