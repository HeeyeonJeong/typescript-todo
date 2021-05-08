import React, { useState } from "react";
import styled, { css } from "styled-components";
import * as BsIcons from "react-icons/bs";
import TodoModal from "./TodoModal";

interface OpenCustom {
  open: boolean;
}

const TodoFooterBlock = styled.footer`
  width: 100%;
  height: 64px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #dedede;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalIcon = styled(BsIcons.BsPlusCircle)<OpenCustom>`
  cursor: pointer;
  transition: 0.125s all ease-in;

  ${(props) =>
    props.open &&
    css`
      transform: rotate(45deg);
      color: #f35456;
    `};
`;

function TodoFooter() {
  const [open, setOpen] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const onToggle = () => {
    setOpen(!open);
    setCreateModal(!createModal);
  };

  return (
    <>
      <TodoFooterBlock>
        <ModalIcon size={38} onClick={onToggle} open={open} />
      </TodoFooterBlock>
      <TodoModal visible={createModal} />
    </>
  );
}

export default TodoFooter;
