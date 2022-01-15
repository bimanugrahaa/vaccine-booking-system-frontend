import { createSlice } from '@reduxjs/toolkit'

const mySession = {
    id: 0,
    username: "",
    name: "",
    email: "",
    token: ""
}

export const Data = createSlice({
    name: "mySession",
    initialState: {
        mySession: mySession
    },
    reducers: {
        addMySession: (state, action) => {
            const newSession = action.payload.data.data
            state.mySession = newSession
            console.log("state", state)
            console.log("action", action)
        },
        deleteMySession: (state) => {
            state.mySession = mySession
        }
    }
})

export const { addMySession, deleteMySession } = Data.actions;
export default Data.reducer