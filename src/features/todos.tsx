import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo, TodoEditPayload, TodoPayload } from "../types/TodoType";

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
    addTodo: (state, action: PayloadAction<TodoPayload>) => {
      const { category, text } = action.payload;
      const todoIds = state.map((todo) => todo.id);
      const lastId = Math.max(0, ...todoIds) + 1;
      state.push({ id: lastId, category, text, done: false });
    },
    deleteTodo: (state, { payload: id }) => {
      return state.filter((data) => data.id !== id);
    },
    editTodo: (state, action: PayloadAction<TodoEditPayload>) => {
      return state.map((data) =>
        data.id === action.payload.id ? { ...data, ...action.payload } : data
      );
    },
    toggleTodo: (state, { payload: id }) => {
      return state.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
