import {Box} from "@mui/material";
import {LeaderBoardSegment} from "./components/LeaderBoardSegment";
import {useSelector} from "react-redux";

export const LeaderBoardPage = () => {
  const { users } = useSelector(state => state.users)

  let sortableUsers = [];
  for (let user in users){
    const total = Object.keys(users[user].answers).length + users[user].questions.length
    sortableUsers.push([user, total]);
  }

  sortableUsers.sort(function(a, b) {
    return b[1] - a[1];
  });

  const top3Users = sortableUsers.slice(0, 3)

  return (
      <Box sx={{ width: '80%', bgColor: 'background.paper' }} mt={2}>
          <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"} alignItems={"space-between"}>
            {top3Users.map((user, index) => <LeaderBoardSegment key={user[0]} user={users[user[0]]} trophyColorIndex={index}/>)}
          </Box>
      </Box>
  )
}