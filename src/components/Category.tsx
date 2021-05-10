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
    display: inline-block;
    position: relative;
    top: -1px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-right: 10px;
    background: ${(props) => props.color || "black"};
    vertical-align: middle;
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
