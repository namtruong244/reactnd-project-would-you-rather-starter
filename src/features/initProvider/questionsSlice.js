import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {questionService} from "../../services/questionService";

const initialState = {};

export const fetchAllQuestions = createAsyncThunk(
    "questions/fetchAllQuestions",
    async (thunkAPI) => {
        return await questionService.getAll();
    }
);

export const questionsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        addVotes: (state, action) => {
            const {questionId, option, userId} = action.payload;
            state.questions[questionId][option].votes = [...state.questions[questionId][option].votes, userId];
        },
        addNewQuestion: (state, action) => {
            state.questions[action.payload.id] = action.payload;
        }
    },
    extraReducers: {
        [fetchAllQuestions.fulfilled]: (state, action) => {
            state.questions = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const {addVotes, addNewQuestion} = questionsSlice.actions;

export default questionsSlice.reducer;
