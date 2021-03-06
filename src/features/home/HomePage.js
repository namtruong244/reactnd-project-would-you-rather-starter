import {Box, Card} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Segment} from "./components/Segment";

export const HomePage = () => {
    const { users } = useSelector(state => state.users);
    const { questions } = useSelector(state => state.questions);
    const { currentUser } = useSelector(state => state.auth);

    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    let userHasQuestion = Object.keys(users).reduce((prevValue, curValue) => {
        const user = users[curValue];
        user.questions.forEach(questionId => {
            if (users[currentUser.id].answers[questionId] === undefined) {
                prevValue.push([
                    {
                        name: user.name,
                        avatarURL: user.avatarURL,
                        questionId: questionId
                    },
                    questions[questionId].timestamp
                ])
            }
        });
        return prevValue
    }, []);
    userHasQuestion.sort((a, b) => b[1] - a[1])

    let answeredQuestion = Object.keys(users[currentUser.id].answers).map(questionId => {
        const userOfQuestion = users[questions[questionId].author]
        return [
            {
                name: userOfQuestion.name,
                avatarURL: userOfQuestion.avatarURL,
                questionId: questionId
            },
            questions[questionId].timestamp
        ]
    });
    answeredQuestion.sort((a, b) => b[1] - a[1])

    return (
        <Box sx={{ width: '60%', bgColor: 'background.paper' }} mt={2}>
            <Card variant="outlined">
                <Tabs value={tabValue} onChange={handleChange} variant={"fullWidth"}>
                    <Tab label="Unanswered" />
                    <Tab label="Answered" />
                </Tabs>
                {tabValue === 0 && (
                    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"space-between"}>
                        {userHasQuestion.map((user, index) => <Segment key={`${user[0].id}-${index}`} user={user[0]} questions={questions}/>)}
                    </Box>
                )}
                {tabValue === 1 && (
                    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"space-between"}>
                        {answeredQuestion.map((user, index) => <Segment key={`${user[0].id}-${index}`} user={user[0]} questions={questions} isAnswered={true}/>)}
                    </Box>
                )}
            </Card>
        </Box>
    )
}