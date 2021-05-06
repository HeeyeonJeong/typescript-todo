import React from "react";
import Template from "./components/Template";
import TodoCategory from "./components/TodoCategory";
import TodoHead from "./components/TodoHead";

function App() {
  return (
    <Template>
      <TodoHead />
      <TodoCategory />
    </Template>
  );
}

export default App;
