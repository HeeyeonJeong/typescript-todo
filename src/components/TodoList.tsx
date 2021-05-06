import React from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../reducers";

function TodoList() {
  const todosData = useSelector((state: RootReducer) => state.todos);
  console.log(todosData);

  return <div>todo</div>;
}

export default TodoList;
