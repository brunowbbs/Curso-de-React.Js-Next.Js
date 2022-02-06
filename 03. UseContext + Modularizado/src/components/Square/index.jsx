import { useContext } from "react";
import { GlobalContext } from "../../contexts/AppContext";

export function Square() {
  const { state, setState } = useContext(GlobalContext);

  function handleCounter() {
    setState({ ...state, counter: state.counter + 1 });
  }

  return (
    <div>
      <h1>{state.counter}</h1>
      <button onClick={handleCounter}>Clicar</button>
    </div>
  );
}
