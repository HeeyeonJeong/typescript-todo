import React from "react";
import styled from "styled-components";

interface CategoryProps {
  color: string;
  count: number;
}

const CategoryBlock = styled.div`
  width: 50px;

  & + & {
    margin-left: 10px;
  }

  .category-color {
    margin-right: 10px;
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    vertical-align: middle;
    background: ${(props) => props.color || "black"};
    position: relative;
    top: -1px;
  }
`;

function Category({ color, count }: CategoryProps) {
  return (
    <CategoryBlock color={color}>
      <span className="category-color" color={color}></span>
      <span>{count}개</span>
    </CategoryBlock>
  );
}

export default Category;
