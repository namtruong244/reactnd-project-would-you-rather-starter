import {Box, Card, CardContent, Divider, Typography} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PropTypes from "prop-types";

const TROPHY_COLOR = {
  0: "#fbbd08",
  1: "#767676",
  2: "#f2711c"
};

export const LeaderBoardSegment = ({ user, trophyColorIndex }) => {
  const totalAnswer = Object.keys(user.answers).length;
  const totalQuestion = user.questions.length;

  return (
      <Card variant={"outlined"} sx={{width: "90%", mt: 1, mb: 1, position: "relative"}}>
        <Box position={"absolute"} sx={{
          backgroundColor: TROPHY_COLOR[trophyColorIndex],
          width: "100px",
          height: "100px",
          transform: "rotate(45deg)",
          top: "-50px",
          left: "-50px "
        }}></Box>
        <Box position={"absolute"} sx={{top: "10px", left: "10px"}}>
          <EmojiEventsIcon sx={{color: "#fff"}}/>
        </Box>
        <CardContent>
          <Box display={"flex"} flexDirection={"row"} mt={2} alignItems={"center"} justifyContent={"start"}>
            <Box component={"img"} width={"120px"} height={"120px"} src={user.avatarURL} mr={2}></Box>
            <Divider orientation="vertical" flexItem/>
            <Box sx={{ml: 2}} display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"start"} width={'100%'}>
              <Typography variant={"h6"} component={"h1"}>{user.name}</Typography>
              <Box display={"flex"} justifyContent={"space-between"} mt={2} width={"90%"}>
                <Typography>Answered questions</Typography>
                <Typography>{totalAnswer}</Typography>
              </Box>
              <Divider component="div" sx={{width: "90%", ml: 0, my: 2}}/>
              <Box display={"flex"} justifyContent={"space-between"} width={"90%"}>
                <Typography>Created questions</Typography>
                <Typography>{totalQuestion}</Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem/>
            <Box minWidth={'120px'}>
              <Card sx={{ml: 2}}>
                <CardContent>
                  <Typography textAlign={"center"} variant={"h6"} component={"h6"}>Score</Typography>
                  <Divider component="div"/>
                  <Box display={"flex"} width={"100%"} height={"100%"} alignItems={"center"} justifyContent={"center"} mt={2}>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"center"} sx={{backgroundColor: "#4caf50"}} width={"50px"} height={"50px"} borderRadius={"50%"}>
                      <Typography color={"white"} fontWeight={"bold"}>{totalQuestion + totalAnswer}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </CardContent>
      </Card>
  )
}

LeaderBoardSegment.propTypes = {
  user: PropTypes.object,
  trophyColorIndex: PropTypes.number
}
