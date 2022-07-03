import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchAllUser} from "./usersSlice";
import {fetchAllQuestions} from "./questionsSlice";
import PropTypes from "prop-types";

export const InitProvider = ({ children }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUser());
        dispatch(fetchAllQuestions());
    }, [dispatch])

    return <>{children}</>
}

InitProvider.propTypes = {
    children: PropTypes.node
}
