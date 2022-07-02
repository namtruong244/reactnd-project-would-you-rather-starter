import {NewPollCard} from "./components/NewPollCard";
import {useDispatch, useSelector} from "react-redux";
import {formatQuestion} from "../../utils/helpers";
import {addNewQuestion} from "../initProvider/questionsSlice";
import {addQuestion} from "../initProvider/usersSlice";
import {useHistory} from "react-router-dom";

export const NewPollPage = () => {
    const {currentUser} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    const submitNewPoll = ({optionOne, optionTwo}) => {
        const question = {
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: currentUser.id
        }
        const formattedQuestion = formatQuestion(question)
        dispatch(addQuestion({userId: currentUser.id, questionId: formattedQuestion.id}))
        dispatch(addNewQuestion(formattedQuestion))
        history.push("/")
    }

    return (
        <>
            <NewPollCard onSubmit={submitNewPoll} />
        </>
    )
}