import two from "../reducers/two";

export default function getTwoModule() {
  return {
    id: "two",
    reducerMap: { two },
  };
}
