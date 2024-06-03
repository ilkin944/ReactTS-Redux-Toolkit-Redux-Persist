import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../..";
export interface Counter {
    count: number
}
const initialState: Counter = {
    count: 0
}

export const countSlice = createSlice({
    name: "count",
    initialState,
    reducers: {
        Increment: (state) => {
            state.count = state.count + 1
        },
        IncrementByAmount: (state, action: PayloadAction<number>) => {
            state.count = state.count + action.payload
        },
        Decrement: (state) => {
            state.count = state.count - 1
        },
        DecrementByAmount: (state, action: PayloadAction<number>) => {
            state.count = state.count - action.payload
        },
        MultiplyByAmount: (state, action: PayloadAction<number>) => {
            state.count = state.count * action.payload
        },
        DivisionByAmount: (state, action: PayloadAction<number>) => {
            state.count = state.count / action.payload
        },
        Reset: (state) => {
            state.count = 0
        }
    },
});
export const { Increment } = countSlice.actions;
export const countSelector = (state: RootState) => state.counter;
export default countSlice.reducer;