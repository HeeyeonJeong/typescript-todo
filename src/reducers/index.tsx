import { combineReducers } from "redux";
import todosReducer from "../features/todos";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;

export type RootReducer = ReturnType<typeof rootReducer>;
