import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootReducer } from "../reducers";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.ul`
  overflow: auto;
  height: 600px;
`;

function TodoList() {
  const todosData = useSelector((state: RootReducer) => state.todos);

  return (
    <TodoListBlock>
      {todosData.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          category={todo.category}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
