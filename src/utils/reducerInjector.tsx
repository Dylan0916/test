import React from "react";

import reducerRegistry from "../store/reducerRegistry";
import { registerEpic } from "../store/epics";
import { AsyncReducer } from "../store";

interface Payload {
  key: keyof AsyncReducer;
  reducer: any;
  epic: any;
}

export default ({ key, reducer, epic }: Payload) =>
  (WrappedComponent: any) => {
    class ReducerInjector extends React.Component {
      constructor(props: any) {
        super(props);

        reducerRegistry.register(key, reducer);
        registerEpic(key, epic);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return ReducerInjector;
  };
