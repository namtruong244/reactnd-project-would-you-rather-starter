import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import {useState} from "react";
import {UserInfo} from "./UserInfo";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {logout} from "../../features/login/authSlice";
import { useHistory } from "react-router-dom";

const PATH_URL = {
    0: "/",
    1: "/add",
    2: "/leaderboard"
}

export const NavBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push(PATH_URL[newValue])
    };

    const logoutHandler = () => {
        dispatch(logout())
    }

    return (
        <Box sx={{ width: '100%' }} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
            <Tabs
                onChange={handleChange}
                value={value}
                aria-label="Tabs where each tab needs to be selected manually"
            >
                <Tab label="Home" />
                <Tab label="New Poll" />
                <Tab label="Leader Board" />
            </Tabs>
            <Box display={"flex"}>
                <UserInfo />
                <Button variant="outlined" sx={{ml: 2}} onClick={logoutHandler}>Logout</Button>
            </Box>
        </Box>
    );
}
