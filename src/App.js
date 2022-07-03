import {Container, CssBaseline} from "@mui/material";
import {LoginPage} from "./features/login/LoginPage";
import {InitProvider} from "./features/initProvider/InitProvider";
import {Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {HomePage} from "./features/home/HomePage";
import {NewPollPage} from "./features/newPoll/NewPollPage";
import {NavBar} from "./components/NavBar/NavBar";
import {AnswerPollPage} from "./features/answerPoll/AnswerPollPage";
import {LeaderBoardPage} from "./features/leaderBoard/LeaderBoardPage";

const App = () => {
    const {currentUser} = useSelector(state => state.auth)

    return (
        <InitProvider>
            <Container maxWidth="md" sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", mb: 2}}>
                <CssBaseline/>
                {currentUser !== null && <NavBar />}
                <Switch>
                    {currentUser === null && <Route path="/*" component={LoginPage} />}
                    <Route path="/questions/:questionId" component={AnswerPollPage} />
                    <Route path="/add" component={NewPollPage} />
                    <Route path="/leaderboard" component={LeaderBoardPage} />
                    <Route path="/" component={HomePage} />
                </Switch>
            </Container>
        </InitProvider>
    );
}

export default App;
