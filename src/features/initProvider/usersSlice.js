import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {userService} from "../../services/userService";

const initialState = {}

export const fetchAllUser = createAsyncThunk(
    'users/fetchAllUser',
    async (thunkAPI) => {
        return await userService.getAll()
    }
)

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addAnswer: (state, action) => {
            const {questionId, option, userId} = action.payload
            state.users[userId].answers[questionId] = option
        }
    },
    extraReducers: {
        [fetchAllUser.fulfilled]: (state, action) => {
            state.users = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addAnswer } = usersSlice.actions

export default usersSlice.reducer
