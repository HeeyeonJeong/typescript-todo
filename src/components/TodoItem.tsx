import React from "react";
import styled, { css } from "styled-components";
import { Todo } from "../types/TodoType";
import * as FiIcons from "react-icons/fi";
import colorCategory from "../options/colorCategory";

interface DoneCustom {
  done: boolean;
}

const CheckIcon = styled(FiIcons.FiCheck)`
  color: #47e774;
  cursor: pointer;
`;

const UnCheckIcon = styled(FiIcons.FiCircle)`
  color: #c4c4c4;
  position: relative;
  top: 3px;
  cursor: pointer;
`;

const EditIcon = styled(FiIcons.FiEdit)`
  color: #000000;
  display: none;
  cursor: pointer;
`;

const RemoveIcon = styled(FiIcons.FiTrash)`
  color: #f35456;
  margin-right: 12px;
  display: none;
  cursor: pointer;
`;

const ItemList = styled.li`
  list-style: none;
  height: 62px;
  display: flex;
  border-bottom: 1px solid #dedede;
  padding-right: 13px;

  &:hover {
    background-color: #f9f9f9;

    ${EditIcon} {
      display: inline-block;
    }

    ${RemoveIcon} {
      display: inline-block;
    }
  }

  .item-contents {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content-left {
    display: flex;
  }
`;
const ItemCategory = styled.div`
  width: 13px;
  height: 100%;
  background-color: ${(props) => props.color};
`;

const ItemTitle = styled.span<DoneCustom>`
  margin: 0 20px;
  ${(props) =>
    props.done &&
    css`
      color: #c4c4c4;
      text-decoration: line-through;
    `}
`;

function TodoItem({ id, category, text, done }: Todo) {
  const findColor = colorCategory.find((color) => color.label === category);

  return (
    <ItemList>
      <ItemCategory color={findColor?.color}></ItemCategory>
      <div className="item-contents">
        <div className="content-left">
          <ItemTitle done={done}>{text}</ItemTitle>
          <EditIcon size={15} />
        </div>
        <div>
          <RemoveIcon size={20} />
          {done ? <CheckIcon size={24} /> : <UnCheckIcon size={24} />}
        </div>
      </div>
    </ItemList>
  );
}

export default TodoItem;
