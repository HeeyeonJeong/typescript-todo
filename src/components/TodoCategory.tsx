import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import colorCategory from "../options/colorCategory";
import { RootReducer } from "../reducers";
import Category from "./Category";

const TodoCategoryBlock = styled.div`
  height: 62px;
  border-bottom: 1px solid #dedede;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 13px;

  font-size: 14px;

  .total-count-box {
    margin-bottom: 8px;
  }

  .total-count {
    margin-left: 10px;
  }

  .total-item-count {
    display: flex;
  }
`;

function TodoCategory() {
  const todosData = useSelector((state: RootReducer) => state.todos);

  const todosCount = todosData.filter((todo) => !todo.done).length;
  const colorCounter = (color: string) =>
    todosData.filter((todo) => todo.category === color && !todo.done).length;

  return (
    <TodoCategoryBlock>
      <div className="total-count-box">
        남은 TO-DO
        <span className="total-count">{todosCount}개</span>
      </div>
      <div className="total-item-count">
        {colorCategory.map((color) => (
          <Category
            key={color.label}
            color={color.color}
            count={colorCounter(color.label)}
          />
        ))}
      </div>
    </TodoCategoryBlock>
  );
}

export default TodoCategory;
