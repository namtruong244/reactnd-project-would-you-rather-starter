import {Button, Typography} from "@mui/material";
import {Poll} from "../../../components/Poll/Poll";
import {useHistory} from "react-router-dom";

export const Segment = ({user, questions}) => {
    const history = useHistory()

    const answerPollHandler = () => {
        history.push(`/questions/${user.questionId}`)
    }

    return (
        <Poll user={user} button_title={"Answer Poll"}>
            <Typography mt={2} textAlign={"center"} width={"100%"}>
                {questions[user.questionId].optionOne.text}
            </Typography>
            <Typography textAlign={"center"} width={"100%"}>
                or...
            </Typography>
            <Button
                fullWidth
                variant="contained"
                color={"success"}
                sx={{mt: 2}}
                onClick={answerPollHandler}
            >
                Answer Poll
            </Button>
        </Poll>
    )
}