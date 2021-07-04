import { BehaviorSubject } from "rxjs";
import { combineEpics } from "redux-observable";
import { mergeMap } from "rxjs/operators";

import one from "./one";

const epicSet = new Set(["one"]);

export const epic$ = new BehaviorSubject(combineEpics(one));

export function registerEpic(name: string, epic: any) {
  if (!epic || epicSet.has(name)) {
    return;
  }

  epicSet.add(name);
  epic$.next(epic);
}

const rootEpics = (action$: any, state$: any) => {
  return epic$.pipe<any>(
    mergeMap((epic: any) => {
      return epic(action$, state$);
    })
  );
};

export default rootEpics;
