import React from "react";
import styled from "styled-components";
import colorCategory from "../options/colorCategory";

interface ColorButtonProps {
  selectColor: string;
  setSelectColor: (value: string) => void;
}

const Label = styled.label`
  display: inline-block;
  width: 21px;
  height: 21px;
  margin-right: 18px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => props.color};
  box-sizing: border-box;
`;

const ColorButtonBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    display: none;
  }

  input:checked + ${Label} {
    border: 2px solid black;
  }
`;

function ColorButton({ selectColor, setSelectColor }: ColorButtonProps) {
  return (
    <ColorButtonBlock>
      {colorCategory.map((color) => (
        <div key={color.label}>
          <input
            id={color.label}
            type="radio"
            name="color-selector"
            value={color.label}
            onChange={(e) => setSelectColor(e.target.value)}
            checked={color.label === selectColor}
          />
          <Label htmlFor={color.label} color={color.color} />
        </div>
      ))}
    </ColorButtonBlock>
  );
}

export default ColorButton;
