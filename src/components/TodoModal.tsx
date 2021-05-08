import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import * as AiIcons from "react-icons/ai";
import TodoHead from "./TodoHead";
import ColorButton from "./ColorButton";
import colorCategory from "../options/colorCategory";

interface TodoModalProps {
  visible: boolean;
}

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const TodoModalBlock = styled.div<TodoModalProps>`
  ${(props) =>
    props.visible &&
    css`
      position: absolute;
      top: 0;
      width: 414px;
      height: 100%;
      background-color: #ffffff;
    `};

  animation-duration: 0.13s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};

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
  const [selectColor, setSelectColor] = useState(colorCategory[0].label);

  console.log(selectColor);

  return (
    <>
      {visible && (
        <TodoModalBlock visible>
          <TodoHead templateTitle={"투-두 작성하기"} />
          <form className="modal-contents">
            <div className="modal-title-box">
              <h2>Write</h2>
              <button type="submit">등록하기</button>
            </div>
            <div className="modal-colors-box">
              <ColorButton
                selectColor={selectColor}
                setSelectColor={setSelectColor}
              />
              <AiIcons.AiOutlineFormatPainter size={24} />
            </div>
            <textarea rows={25}></textarea>
          </form>
        </TodoModalBlock>
      )}
    </>
  );
}

export default TodoModal;
