import React from "react";
import styled from "styled-components";
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
  return (
    <TodoCategoryBlock>
      <div className="total-count-box">
        남은 TO-DO
        <span className="total-count">5개</span>
      </div>
      <div className="total-item-count">
        <Category color="#ffafb0" />
        <Category color="#ffc282" />
        <Category color="#fbff8f" />
        <Category color="#d3fc8d" />
        <Category color="#aee4ff" />
        <Category color="#b5c7ed" />
      </div>
    </TodoCategoryBlock>
  );
}

export default TodoCategory;
