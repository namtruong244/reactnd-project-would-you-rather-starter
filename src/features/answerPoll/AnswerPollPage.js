import {Poll} from "../../components/Poll/Poll";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";
import {useState} from "react";
import {addAnswer} from "../initProvider/usersSlice";
import {addVotes} from "../initProvider/questionsSlice";

export const AnswerPollPage = () => {
    const {questions} = useSelector(state => state.questions)
    const {users} = useSelector(state => state.users)
    const {currentUser} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [answer, setAnswer] = useState("")

    const {questionId} = useParams()

    const author = users[questions[questionId].author]

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value);
    }

    const submitAnswerHandler = () => {
        const answerInfo = {
            userId: currentUser.id,
            questionId,
            option: answer
        }
        dispatch(addAnswer(answerInfo))
        dispatch(addVotes(answerInfo))
    }

    return (
        <Box width={"70%"}>
            <Poll user={author}>
                <FormControl sx={{ml: 5}}>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        value={answer}
                        onChange={answerChangeHandler}
                    >
                        <FormControlLabel value="optionOne" control={<Radio />} label={questions[questionId].optionOne.text} />
                        <FormControlLabel value="optionTwo" control={<Radio />} label={questions[questionId].optionTwo.text} />
                    </RadioGroup>
                </FormControl>
                <Button
                    fullWidth
                    variant="contained"
                    color={"success"}
                    sx={{mt: 2}}
                    disabled={!answer}
                    onClick={submitAnswerHandler}
                >
                    Submit
                </Button>
            </Poll>
        </Box>
    )
}