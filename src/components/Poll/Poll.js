import {Box, Card, CardContent, Divider, Typography} from "@mui/material";

export const Poll = ({user, children}) => {
    return (
        <Card variant={"outlined"} sx={{width: "90%", mt: 1, mb: 1}}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {user.name} asks:
                </Typography>
                <Divider component="div" ml={0}/>
                <Box display={"flex"} flexDirection={"row"} mt={2} alignItems={"center"} justifyContent={"start"}>
                    <Box component={"img"} width={"120px"} height={"120px"} src={user.avatarURL} mr={2}></Box>
                    <Divider orientation="vertical" flexItem/>
                    <Box sx={{ml: 2}} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"} width={'100%'}>
                        <Typography fontSize={16} variant="h6" component="h6">
                            Would you rather
                        </Typography>
                        {children}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )
}