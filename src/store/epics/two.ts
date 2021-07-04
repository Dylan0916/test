import { switchMap } from "rxjs/operators";
import { ofType } from "redux-observable";

function fetch() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), 3000);
  });
}

const twoEpic = (action$: any) => {
  return action$.pipe(
    ofType("FETCH_ONE_REQUEST"),
    switchMap(() => {
      console.log("=== TWO ===");

      return fetch().then(() => ({ type: "FETCH_TWO_SUCCESS" }));
    })
  );
};

export default twoEpic;
