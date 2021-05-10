import React from "react";
import * as BsIcons from "react-icons/bs";
import styled, { css } from "styled-components";

interface ButtonProps {
  onOff: () => void;
  isClose: boolean;
}

interface IconProps {
  isClose: boolean;
}

const ModalIcon = styled(BsIcons.BsPlusCircle)<IconProps>`
  ${(props) =>
    props.isClose &&
    css`
      transform: rotate(45deg);
      color: #f35456;
    `};
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 64px;
  border-top: 1px solid #dedede;
  background: #ffffff;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

function Button({ onOff, isClose }: ButtonProps) {
  return (
    <ButtonBlock>
      <button type="button" onClick={onOff}>
        <ModalIcon size={38} isClose={isClose} />
      </button>
    </ButtonBlock>
  );
}

export default Button;
