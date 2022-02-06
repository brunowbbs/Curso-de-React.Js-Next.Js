import { createContext, useContext, useReducer } from "react";

//actions
export const actions = {
  INCREMENT: "ACTION_INCREMENT",
};

//data.js
const globalState = {
  title: "O titulo do contexto",
  counter: 0,
};

export function reducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { ...state, counter: state.counter + 1 };
    default:
      return { ...state };
  }
}

//AppContext
export const Context = createContext();

export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  function handleIncrement() {
    dispatch({ type: actions.INCREMENT });
  }

  return (
    <Context.Provider value={{ state, handleIncrement }}>
      {children}
    </Context.Provider>
  );
};

export function Box() {
  const { state, handleIncrement } = useContext(Context);
  return (
    <h1 onClick={handleIncrement}>
      {state.title} - {state.counter}
    </h1>
  );
}

//App.jsx
function App() {
  return (
    <AppContext>
      <Box />
    </AppContext>
  );
}

export default App;
