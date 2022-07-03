import {Box, Button, Card, CardContent, Divider, TextField, Typography} from "@mui/material";
import {useState} from "react";
import PropTypes from "prop-types";

export const NewPollCard = ({onSubmit}) => {
    const [optionOne, setOptionOne] = useState("");
    const [optionTwo, setOptionTwo] = useState("");

    const onSubmitHandler = () => {
        onSubmit({optionOne, optionTwo});
    }

    const changeQuestionValueHandler = (event) => {
        const input = event.target;
        if (input.id === "option-one"){
            setOptionOne(input.value);
        }else{
            setOptionTwo(input.value);
        }
    }

    return (
        <Card variant={"outlined"} sx={{width: "60%", mt: 1, mb: 1}}>
            <CardContent>
                <Typography variant="h6" component="div">
                    Create a New Poll
                </Typography>
                <Divider component="div" ml={0}/>
                <Box mt={2} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"} width={'100%'}>
                    <Typography>Complete the question:</Typography>
                    <Typography fontSize={16} variant="h6" component="h6" mt={2}>
                        Would you rather...
                    </Typography>
                    <Box mt={2} width="100%">
                        <TextField id="option-one" label="Option one" variant="outlined" fullWidth value={optionOne}
                                   onChange={changeQuestionValueHandler}
                                   autoComplete={"off"}
                        />
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                            <Divider component="div" sx={{mt: 3, mb: 3, width: "45%"}}/>
                            <Typography variant={"h6"} component={"h6"}>OR</Typography>
                            <Divider component="div" sx={{mt: 3, mb: 3, width: "45%"}}/>
                        </Box>
                        <TextField id="option-two" label="Option two" variant="outlined" fullWidth value={optionTwo}
                                   onChange={changeQuestionValueHandler}
                                   autoComplete={"off"}
                        />
                        <Button variant={"contained"} color={"success"} fullWidth sx={{mt: 2}}
                                disabled={!(optionOne && optionTwo)}
                                onClick={onSubmitHandler}
                        >Submit
                        </Button>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}

NewPollCard.propTypes = {
    onSubmit: PropTypes.func
}
