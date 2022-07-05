import {Container, CssBaseline} from "@mui/material";
import {LoginPage} from "./features/login/LoginPage";
import {InitProvider} from "./features/initProvider/InitProvider";
import {Route, Switch} from "react-router-dom";
import {HomePage} from "./features/home/HomePage";
import {NewPollPage} from "./features/newPoll/NewPollPage";
import {AnswerPollPage} from "./features/answerPoll/AnswerPollPage";
import {LeaderBoardPage} from "./features/leaderBoard/LeaderBoardPage";
import {NotFoundPage} from "./features/notFound/NotFoundPage";
import {PrivateRoute} from "./components/PrivateRoute/PrivateRoute";

const App = () => {

    return (
        <InitProvider>
            <Container maxWidth="md" sx={{display: "flex", justifyContent: "center", flexWrap: "wrap", mb: 2}}>
                <CssBaseline/>
                <Switch>
                    <Route path="/login" component={LoginPage} />
                    <PrivateRoute path="/questions/:questionId" component={AnswerPollPage} />
                    <PrivateRoute path="/add" component={NewPollPage} />
                    <PrivateRoute path="/leaderboard" component={LeaderBoardPage} />
                    <PrivateRoute path="/" exact component={HomePage} />
                    <Route path="/*"  component={NotFoundPage}/>
                </Switch>
            </Container>
        </InitProvider>
    );
}

export default App;
