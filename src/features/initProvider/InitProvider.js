import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAllUser} from "./usersSlice";
import {fetchAllQuestions} from "./questionsSlice";

export const InitProvider = ({children}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllUser())
        dispatch(fetchAllQuestions())
    }, [dispatch])

    return <>{children}</>
}