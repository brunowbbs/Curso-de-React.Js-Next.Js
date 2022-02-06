import React from "react";
import { Box } from "./components/Box";
import { Square } from "./components/Square";
import { AppContext } from "./contexts/AppContext";

function App() {
  return (
    <AppContext>
      <Box />
      <Square />
    </AppContext>
  );
}

export default App;
