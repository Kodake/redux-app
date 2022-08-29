import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    counter: number
}

const initialState: CounterState = {
    counter: 10,
}

export const todoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = todoSlice.actions