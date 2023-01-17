
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    total: 0


}

const Countslice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state, action) => {
            if (state.id === action.payload.id) {
                state.value += 1;

            }
            state.total += 1;
        },
        decrease: (state, action) => {
            if (state.value > 0 && state.id === action.payload.id) {
                state.value -= 1;
            }
            state.total += 1;
        }
    }
})

export const { increase, decrease } = Countslice.actions

export default Countslice.reducer
