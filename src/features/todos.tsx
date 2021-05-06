import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoType";

let nextTodoId = 2;

const initialState: Todo[] = [
  {
    id: 1,
    category: "red",
    text: "마트가서 장보기",
    done: false,
  },
  {
    id: 2,
    category: "blue",
    text: "운동하기",
    done: false,
  },
  {
    id: 3,
    category: "yellow",
    text: "독서하기",
    done: false,
  },
  {
    id: 4,
    category: "purple",
    text: "공부하기",
    done: true,
  },
  {
    id: 5,
    category: "orange",
    text: "친구 만나기",
    done: false,
  },
  {
    id: 6,
    category: "green",
    text: "영화 보기",
    done: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action: PayloadAction<Todo>) {
        const { id, category, text } = action.payload;
        state.push({ id, category, text, done: false });
      },
      prepare(category: string, text: string, done: boolean) {
        return { payload: { id: nextTodoId++, category, text, done } };
      },
    },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
