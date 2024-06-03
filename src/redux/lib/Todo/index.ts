import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
export interface Todo {
    id: number;
    todo: string;
    completed: boolean
}
const initialState: Todo[] = []

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        AddTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
            return state;
        },
        DeleteTodo: (state, action: PayloadAction<number>) => {
            state.splice(action.payload, 1)
            return state;
        },
        ToggleTodo: (state, action: PayloadAction<number>) => {
            state[action.payload].completed = !state[action.payload].completed
            return state;
        },
        EditTodo: (state, action: PayloadAction<{ id: number, todo: string }>) => {
            state[action.payload.id].todo = action.payload.todo
            return state;
        },
        ClearAll: (state) => {
            state = [];
            return state;
        },
        ClearCompleted: (state) => {
            state = state.filter((todo) => !todo.completed)
            return state
        }

    },
});
export const { AddTodo, DeleteTodo, ToggleTodo, EditTodo, ClearAll, ClearCompleted } = todoSlice.actions;
export const todoSelector = (state: RootState) => state.todo;
export default todoSlice.reducer;