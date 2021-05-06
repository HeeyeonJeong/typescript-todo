import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.h1`
  height: 62px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding: 0 13px;

  font-size: 24px;
  font-weight: normal;
`;

function TodoHead() {
  return <TodoHeadBlock>투-두 리스트</TodoHeadBlock>;
}

export default TodoHead;
