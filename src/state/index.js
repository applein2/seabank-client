import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    boards: []
};


export const boardSlice = createSlice({
    name: "board",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogout: (state, action) => {
            state.user = null
            state.token = null
        },
        getBoards: (state, action) => {
            state.boards = action.payload.boards
        },
        addBoard: (state, action) => {
            console.log(action.payload)
            state.boards.push(action.payload)
        },
        deleteBoard: (state, action) => {
            const filteredBoard = state.boards.filter((board) => {
                return board._id !== action.payload.id
            })
            state.boards = filteredBoard
        }
    }
})

export const { setLogin, setLogout, getBoards, addBoard, deleteBoard } = boardSlice.actions;

export default boardSlice.reducer; 