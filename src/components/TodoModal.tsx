import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import * as AiIcons from "react-icons/ai";
import TodoHead from "./TodoHead";
import ColorButton from "./ColorButton";
import colorCategory from "../options/colorCategory";
import { addTodo } from "../features/todos";
import { useDispatch } from "react-redux";
import Button from "./Button";
interface TodoModalProps {
  visible: boolean;
  onCancel: () => void;
  templateTitle: string;
  modalTitle: string;
  modalButton: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const TodoModalBlock = styled.div`
  position: absolute;
  top: 0;
  width: 414px;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  animation-duration: 0.1s;
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
      cursor: pointer;
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

function TodoModal({
  visible,
  onCancel,
  templateTitle,
  modalTitle,
  modalButton,
}: TodoModalProps) {
  const [selectColor, setSelectColor] = useState(colorCategory[0].label);
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    category: "",
    text: "",
  });

  const onChange = (e: any) => {
    setTodo({
      ...todo,
      text: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo(selectColor, todo.text));
    onCancel();
  };

  if (!visible) return null;

  return (
    <TodoModalBlock>
      <TodoHead templateTitle={templateTitle} />
      <form className="modal-contents" onSubmit={onSubmit}>
        <div className="modal-title-box">
          <h2>{modalTitle}</h2>
          <button type="submit">{modalButton}</button>
        </div>
        <div className="modal-colors-box">
          <ColorButton
            selectColor={selectColor}
            setSelectColor={setSelectColor}
          />
          <AiIcons.AiOutlineFormatPainter size={24} />
        </div>
        <textarea rows={25} onChange={onChange} name="text" required />
      </form>
      <Button onOff={onCancel} isClose={true} />
    </TodoModalBlock>
  );
}

export default TodoModal;
