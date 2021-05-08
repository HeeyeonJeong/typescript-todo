import React from "react";
import styled from "styled-components";
interface TodoHeadProps {
  templateTitle: string;
}

const TodoHeadBlock = styled.h1`
  height: 62px;
  border-bottom: 1px solid #dedede;
  display: flex;
  align-items: center;
  padding: 0 13px;
  font-size: 24px;
  font-weight: normal;
`;

function TodoHead({ templateTitle }: TodoHeadProps) {
  return <TodoHeadBlock>{templateTitle}</TodoHeadBlock>;
}

TodoHead.defaultProps = {
  templateTitle: "투-두 리스트",
};

export default TodoHead;
