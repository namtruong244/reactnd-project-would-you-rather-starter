import {Box, Card, CardActions, CardContent, Divider,} from "@mui/material";
import {BrandImage} from "./components/BrandImage";
import {LoginHeader} from "./components/LoginHeader";
import {LoginForm} from "./components/LoginForm";
import {useDispatch, useSelector} from "react-redux";
import {login} from "./authSlice";
import {Redirect, useLocation} from "react-router-dom";

export const LoginPage = () => {
    const { currentUser } = useSelector(state => state.auth)
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const { state } = useLocation();

    const handlerLogin = (friendId) => {
        dispatch(login(users[friendId]));
    }

    if (currentUser !== null) {
        return <Redirect to={state?.from || "/"} />
    }

    return (
        <Box sx={{mt: 2}} maxWidth={"50%"}>
            <Card sx={{minWidth: 275}}>
                <CardContent>
                    <LoginHeader/>
                    <Divider component="div"/>
                    <Box textAlign={"center"} sx={{mt: 2}}>
                        <BrandImage/>
                    </Box>
                </CardContent>
                <CardActions>
                    <Box display={"flex"} flexWrap={"wrap"} sx={{m: "0 auto"}} justifyContent={"center"} width={"95%"}>
                        <LoginForm onLogin={handlerLogin} users={users}/>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}
