import one from "../reducers/one";

export default function getOneModule() {
  return {
    id: "one",
    reducerMap: { one },
  };
}
