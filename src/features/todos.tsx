import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoType";

let nextTodoId = 6;

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
        const { category, text } = action.payload;
        state.push({ id: nextTodoId++, category, text, done: false });
      },
      prepare(category: string, text: string) {
        return { payload: { id: nextTodoId++, category, text, done: false } };
      },
    },
    deleteTodo: (state, { payload: id }) => {
      return state.filter((data) => data.id !== id);
    },
    editTodo: (state, { payload: id }) => {},
    toggleTodo: (state, { payload: id }) => {
      const selectTodo = state.find((data) => data.id === id);
      if (selectTodo) {
        selectTodo.done = !selectTodo.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
