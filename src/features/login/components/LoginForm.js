import {Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import {useState} from "react";
import PropTypes from "prop-types";

export const LoginForm = ({ onLogin, users }) => {
    const [friend, setFriend] = useState();

    if (users === undefined){
        return <CircularProgress sx={{mb: 2}}/>
    }

    const handlerChangeFriend = (event) => {
        setFriend(event.target.value);
    }

    const renderValueSelected = key => <>{users[key].name}</>

    const handlerSubmit = () => {
        onLogin(friend);
    }

    return (
        <>
            <Typography variant={"h6"} component={"h1"} align={"center"} display={"block"}>Sign In</Typography>
            <FormControl fullWidth sx={{mt: 2}} size="small">
                <InputLabel id="select-friend-label">Select a Friend</InputLabel>
                <Select
                    labelId="select-friend-label"
                    id="select-friend"
                    label="Select a Friend"
                    defaultValue=""
                    onChange={handlerChangeFriend}
                    renderValue={renderValueSelected}
                >
                    {Object.keys(users).map((key) =>
                        <MenuItem key={users[key].id} value={users[key].id}>
                            <Box component={"img"} maxWidth={"40px"} maxHeight={"40px"} src={users[key].avatarURL} mr={2}></Box>
                            {users[key].name}
                        </MenuItem>
                    )}
                </Select>
            </FormControl>
            <Button
                fullWidth sx={{mt: 2, mb: 1}}
                variant="contained"
                color={"success"}
                disabled={!friend}
                onClick={handlerSubmit}
            >
                Login
            </Button>
        </>
    )
}

LoginForm.propTypes = {
    onLogin: PropTypes.func,
    users: PropTypes.object
}
