export interface Todo {
  id: number;
  category: string;
  text: string;
  done: boolean;
}

export type TodoPayload = {
  category: string;
  text: string;
};

export interface TodoEditPayload extends TodoPayload {
  id: number;
}
