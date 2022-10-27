import { createSlice } from "@reduxjs/toolkit";

const initialId = createSlice(
    {
        name: 'initialId',
        initialState: 1,
        reducers: {
            setInitialId: (state, action) => action.payload
        }
    })

export const { setInitialId } = initialId.actions
export default initialId.reducer