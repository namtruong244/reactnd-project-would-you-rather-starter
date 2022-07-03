import {Poll} from "../../components/Poll/Poll";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Box} from "@mui/material";
import {addAnswer} from "../initProvider/usersSlice";
import {addVotes} from "../initProvider/questionsSlice";
import {AnswerPoll} from "./components/AnswerPoll";
import {ResultPoll} from "./components/ResultPoll";

export const AnswerPollPage = () => {
    const { questions } = useSelector(state => state.questions);
    const { users } = useSelector(state => state.users);
    const { currentUser } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { questionId } = useParams();

    const author = users[questions[questionId].author];
    const answer = users[currentUser.id].answers[questionId];

    const submitAnswerHandler = (answer) => {
        const answerInfo = {
            userId: currentUser.id,
            questionId,
            option: answer
        };
        dispatch(addAnswer(answerInfo));
        dispatch(addVotes(answerInfo));
    }

    return (
        <Box width={"70%"}>
            <Poll user={author}>
                {!answer && <AnswerPoll questions={questions[questionId]} onSubmit={submitAnswerHandler}/>}
                {answer && <ResultPoll questions={questions[questionId]} answer={answer}/>}
            </Poll>
        </Box>
    )
}
