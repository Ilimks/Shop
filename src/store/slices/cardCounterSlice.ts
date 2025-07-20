import { createSlice } from "@reduxjs/toolkit";




const cardCounterSlice = createSlice( {
    name: "cardCounter",
    initialState: {
        counter: 0
    },
    reducers: {
        setCardCounter(state, action: {payload: number, type: any}) {
            state.counter = action.payload
        }
    }
})

export const {setCardCounter} = cardCounterSlice.actions
export default cardCounterSlice.reducer
