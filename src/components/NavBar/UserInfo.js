import {useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";

export const UserInfo = () => {
    const currentUser = useSelector(state => state.auth.currentUser);

    return (
        <Box display={"flex"} alignItems={"center"}>
            <Box component={"img"} src={currentUser.avatarURL} maxWidth={"35px"} maxHeight={"35px"} />
            <Box ml={1} display={"flex"} flexDirection={"column"} justifyContent={"center"} maxHeight={"100%"}>
                <Typography fontSize={10}>Welcome,</Typography>
                <Typography fontSize={14} variant={"h6"} component={"h6"}>{currentUser.name}</Typography>
            </Box>
        </Box>
    )
}