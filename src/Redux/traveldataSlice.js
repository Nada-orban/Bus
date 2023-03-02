import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {},



}

const traveldataslice = createSlice({
    name: 'traveldata',
    initialState,
    reducers: {
        addtosearch: (state, action) => {
            state.data.push(action.payload)
            console.log(state.data)

        }

    }

});


export const { addtosearch } = traveldataslice.actions

export default traveldataslice.reducer
