import React from "react";

import reducerRegistry from "../store/reducerRegistry";

export default ({ key, reducer }: any) =>
  (WrappedComponent: any) => {
    class ReducerInjector extends React.Component {
      constructor(props: any) {
        super(props);

        reducerRegistry.register(key, reducer);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return ReducerInjector;
  };
