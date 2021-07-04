export const defaultState = {
  num: 0,
};

export default function one(state = defaultState, action: any) {
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
