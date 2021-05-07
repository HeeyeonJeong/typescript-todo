import React from "react";
import Template from "./components/Template";
import TodoCategory from "./components/TodoCategory";
import TodoFooter from "./components/TodoFooter";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Template>
      <TodoHead />
      <TodoCategory />
      <TodoList />
      <TodoFooter />
    </Template>
  );
}

export default App;
