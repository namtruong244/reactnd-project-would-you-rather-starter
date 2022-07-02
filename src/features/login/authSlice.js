import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const {id, name, avatarURL} = action.payload
            state.currentUser = {id, name, avatarURL}
        },
        logout: (state) => {
            state.currentUser = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
