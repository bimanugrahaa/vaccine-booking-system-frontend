import { createSlice } from '@reduxjs/toolkit'

const mySession = {
    id: 0,
    username: "",
    name: "",
    email: "",
    token: "",
    family: {
        namaLengkap: "",
        nik: 0
    }
}

export const Data = createSlice({
    name: "mySession",
    initialState: {
        mySession: mySession
    },
    reducers: {
        addMySession: (state, action) => {
            console.log(action)
            const newSession = action.payload
            state.mySession = newSession
            console.log("state", state)
            console.log("action", action)
        },
        deleteMySession: (state) => {
            state.mySession = mySession
        },
        checkFamilyStatus: (state, action) => {
            console.log(action)
            const familyStatus = action.payload
            state.mySession.family = familyStatus
            console.log("state", state)
            console.log("action", action)
        },
    }
})

export const { addMySession, deleteMySession, checkFamilyStatus } = Data.actions;
export default Data.reducer