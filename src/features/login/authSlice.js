import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.currentUser = action.payload
        },
        logout: (state) => {
            state.currentUser = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
