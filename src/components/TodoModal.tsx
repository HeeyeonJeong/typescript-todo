import React from "react";
import styled, { css } from "styled-components";
import TodoFooter from "./TodoFooter";
import TodoHead from "./TodoHead";

interface TodoModalProps {
  visible: boolean;
}

const TodoModalBlock = styled.div<TodoModalProps>`
  display: none;
  position: absolute;
  top: 0;
  width: 414px;
  height: 100%;
  background-color: grey;

  ${(props) =>
    props.visible &&
    css`
      display: block;
    `};
`;

function TodoModal({ visible }: TodoModalProps) {
  return (
    <TodoModalBlock visible={visible}>
      <TodoHead templateTitle={"투-두 작성하기"} />
    </TodoModalBlock>
  );
}

export default TodoModal;
