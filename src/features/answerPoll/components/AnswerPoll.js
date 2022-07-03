import {Button, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import {useState} from "react";
import PropTypes from "prop-types";

export const AnswerPoll = ({onSubmit, questions}) => {
    const [answer, setAnswer] = useState("");

    const answerChangeHandler = (event) => {
        setAnswer(event.target.value);
    }

    const submitAnswerHandler = () => {
        onSubmit(answer);
    }

    return (
        <>
            <Typography fontSize={16} variant="h6" component="h6">
                Would you rather
            </Typography>
            <FormControl sx={{ml: 5}}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={answer}
                    onChange={answerChangeHandler}
                >
                    <FormControlLabel value="optionOne" control={<Radio />} label={questions.optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio />} label={questions.optionTwo.text} />
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
        </>
    )
}

AnswerPoll.propTypes = {
    onSubmit: PropTypes.func,
    questions: PropTypes.object
}
