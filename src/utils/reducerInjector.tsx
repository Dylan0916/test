import React from "react";

import reducerRegistry from "../store/reducerRegistry";
import { registerEpic } from "../store/epics";

export default ({ key, reducer, epic }: any) =>
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
