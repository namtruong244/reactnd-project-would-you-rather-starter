import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import {UserInfo} from "./UserInfo";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../features/login/authSlice";
import {useHistory, useLocation} from "react-router-dom";

export const NavBar = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("/");
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if(location.pathname.startsWith("/questions")) {
            setValue(false);
        }else{
            setValue(location.pathname);
        }
    }, [location])

    const handleChange = (_, newValue) => {
        setValue(newValue);
        history.push(newValue);
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <Box sx={{ width: "100%" }} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Tabs
                onChange={handleChange}
                value={value}
                aria-label="Tabs where each tab needs to be selected manually"
            >
                <Tab label="Home" value='/' ></Tab>
                <Tab label="New Poll" value='/add' />
                <Tab label="Leader Board" value='/leaderboard'/>
            </Tabs>
            <Box display={"flex"}>
                <UserInfo />
                <Button variant="outlined" sx={{ml: 2}} onClick={logoutHandler}>Logout</Button>
            </Box>
        </Box>
    );
}
