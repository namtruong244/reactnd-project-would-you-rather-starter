import {Button, Typography} from "@mui/material";
import {Poll} from "../../../components/Poll/Poll";
import {useHistory} from "react-router-dom";
import PropTypes from "prop-types";

export const Segment = ({user, questions, isAnswered=false}) => {
    const history = useHistory();

    const answerPollHandler = () => {
        history.push(`/questions/${user.questionId}`);
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
                color={isAnswered ? "info" : "success"}
                sx={{mt: 2}}
                onClick={answerPollHandler}
            >
                {isAnswered ? "Result" : "Answer Poll"}
            </Button>
        </Poll>
    )
}

Segment.propTypes = {
    user: PropTypes.object,
    questions: PropTypes.object,
    isAnswered: PropTypes.bool
}
