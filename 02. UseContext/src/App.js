import React from "react";

const globalState = {
  title: "O titulo do contexto",
  counter: 0,
};

const GlobalContext = React.createContext();

function Box() {
  const {
    contextState: { title },
  } = React.useContext(GlobalContext);
  return <h1>{title}</h1>;
}

function Square() {
  const { contextState, setContextState } = React.useContext(GlobalContext);

  function handleCounter() {
    setContextState({ ...contextState, counter: contextState.counter + 1 });
  }

  return (
    <div>
      <h1>{contextState.counter}</h1>
      <button onClick={handleCounter}>Clicar</button>
    </div>
  );
}

function App() {
  const [contextState, setContextState] = React.useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Box />
      <Square />
    </GlobalContext.Provider>
  );
}

export default App;
