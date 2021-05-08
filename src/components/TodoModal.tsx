import React from "react";
import styled, { css } from "styled-components";
import * as AiIcons from "react-icons/ai";
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
  background-color: #ffffff;

  ${(props) =>
    props.visible &&
    css`
      display: block;
    `};

  .modal-contents {
    padding: 12px;
  }

  .modal-title-box {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;

    h2 {
      font-weight: normal;
    }

    button {
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      width: 98px;
      background-color: #ffffff;
      font-size: 14px;
    }
  }

  .modal-colors-box {
    height: 33px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  textarea {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border-color: #dedede;
    border-radius: 5px;
  }
`;

function TodoModal({ visible }: TodoModalProps) {
  return (
    <TodoModalBlock visible={visible}>
      <TodoHead templateTitle={"투-두 작성하기"} />
      <form className="modal-contents">
        <div className="modal-title-box">
          <h2>Write</h2>
          <button type="submit">등록하기</button>
        </div>
        <div className="modal-colors-box">
          <div>color tools</div>
          <AiIcons.AiOutlineFormatPainter size={24} />
        </div>
        <textarea rows={25}></textarea>
      </form>
    </TodoModalBlock>
  );
}

export default TodoModal;
