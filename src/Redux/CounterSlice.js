
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    adult: 0,
    children: 0,
    seniors: 0,
    total: 0



}

const Countslice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state, action) => {
            if ('adult' === action.payload) {
                state.adult += 1;
                state.total += 1;

            } else if ('children' === action.payload) {
                state.children += 1;
                state.total += 1;

            } else {
                state.seniors += 1;
                state.total += 1;

            }

        },
        decrease: (state, action) => {
            if ('adult' === action.payload && state.adult > 0) {
                state.adult -= 1;
                state.total -= 1;

            } else if ('children' === action.payload && state.children > 0 > 0) {
                state.children -= 1;
                state.total -= 1;

            } else {
                state.seniors -= 1;
                state.total -= 1;

            }
        }
    }
})

export const { increase, decrease } = Countslice.actions

export default Countslice.reducer
