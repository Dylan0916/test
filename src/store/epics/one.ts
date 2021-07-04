import { switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";

function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), 3000);
  });
}

const oneEpic = (action$: any) => {
  return action$.pipe(
    ofType("FETCH_ONE_REQUEST"),
    switchMap(() => {
      console.log("=== One ===");

      return fetch().then(() => ({ type: "FETCH_ONE_SUCCESS" }));
    })
  );
};

export default oneEpic;
