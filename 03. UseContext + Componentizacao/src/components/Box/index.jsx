import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

export function Box() {
  const { state } = useContext(GlobalContext);
  return <h1>{state.title}</h1>;
}
