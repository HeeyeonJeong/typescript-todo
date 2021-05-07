import React from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../reducers";
import TodoItem from "./TodoItem";

function TodoList() {
  const todosData = useSelector((state: RootReducer) => state.todos);
  console.log(todosData);

  return (
    <ul>
      {todosData.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          category={todo.category}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </ul>
  );
}

export default TodoList;
