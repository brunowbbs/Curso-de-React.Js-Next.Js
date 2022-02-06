import React, { useReducer } from "react";

//useReducer foi criado para manipular estads complexos

const globalState = {
  title: "O titulo do contexto",
  counter: 0,
};

const reducer = (state, action) => {
  //um reducer sempre deve retornar um estado

  switch (action.type) {
    case "incrementar": {
      return { ...state, counter: state.counter + 1 };
    }

    case "aumentar": {
      return { ...state, counter: state.counter + action.payload.value };
    }

    default: {
      return { ...state };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);

  const { title, counter } = state;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{counter}</h3>
      <button onClick={() => dispatch({ type: "incrementar" })}>
        incrementar
      </button>
      <button
        onClick={() => dispatch({ type: "aumentar", payload: { value: 10 } })}
      >
        aumentar
      </button>
    </div>
  );
}

export default App;
