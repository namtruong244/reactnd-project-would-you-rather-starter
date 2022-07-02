import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/login/authSlice";
import usersReducer from "../features/initProvider/usersSlice"
import questionsReducer from "../features/initProvider/questionsSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        questions: questionsReducer,
        auth: authReducer
    },
})
