import {Box, Card} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Segment} from "./components/Segment";

export const HomePage = () => {
    const { users } = useSelector(state => state.users)
    const { questions } = useSelector(state => state.questions)

    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const userHasQuestion = Object.keys(users).reduce((prevValue, curValue) => {
        const user = users[curValue]
        user.questions.forEach(question => {
            prevValue.push({
                name: user.name,
                avatarURL: user.avatarURL,
                questionId: question
            })
        })
        return prevValue
    }, [])

    return (
        <Box sx={{ width: '60%', bgColor: 'background.paper' }} mt={2}>
            <Card variant="outlined">
                <Tabs value={tabValue} onChange={handleChange} variant={"fullWidth"}>
                    <Tab label="Unanswered" />
                    <Tab label="Answered" />
                </Tabs>
                {tabValue === 0 && (
                    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"space-between"}>
                        {userHasQuestion.map((user, index) => <Segment key={`${user.id}-${index}`} user={user} questions={questions}/>)}
                    </Box>
                )}
                {tabValue === 1 && (
                    // <Typography>No answered</Typography>
                    <></>
                )}
            </Card>
        </Box>
    )
}