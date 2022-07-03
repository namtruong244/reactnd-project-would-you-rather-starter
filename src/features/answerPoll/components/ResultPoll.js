import {Box, Button, Card, CardContent, IconButton, LinearProgress, Typography} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import {useHistory} from "react-router-dom";

export const ResultPoll = ({questions, answer}) => {
    const history = useHistory()

    const totalVotesOptionOne = questions.optionOne.votes.length
    const totalVotesOptionTwo = questions.optionTwo.votes.length
    const totalVotes = totalVotesOptionOne + totalVotesOptionTwo

    const optionOnePercentage = totalVotesOptionOne / totalVotes * 100

    const backClickHandler = () => {
        history.push("/")
    }

  return (
      <Box sx={{ width: '100%' }}>
          <Typography fontSize={20} variant={"h6"} component={"h6"}>Result: </Typography>
          <Typography fontSize={14} variant="h6" component="h6">
              Would you rather
          </Typography>
          <Card sx={{ minWidth: 275, mt: 2 }} variant="outlined">
              <CardContent>
                  {answer === "optionOne" && <YourVote/>}
                  <Typography sx={{ fontSize: 14 }} variant={"h6"} component={"h6"}>
                      {questions.optionOne.text}
                  </Typography>
                  <LinearProgressWithLabel value={optionOnePercentage} color={answer === "optionOne" ? "success" : "info"} />
                  <Typography sx={{ fontSize: 14 }} variant={"h6"} component={"h6"} textAlign={"center"}>
                      {`${totalVotesOptionOne} out of ${totalVotes} votes`}
                  </Typography>
              </CardContent>
          </Card>

          <Card sx={{ minWidth: 275, mt: 2 }} variant="outlined">
              <CardContent>
                  {answer === "optionTwo" && <YourVote/>}
                  <Typography sx={{ fontSize: 14 }} variant={"h6"} component={"h6"}>
                      {questions.optionTwo.text}
                  </Typography>
                  <LinearProgressWithLabel value={100 - optionOnePercentage} color={answer === "optionTwo" ? "success" : "info"} />
                  <Typography sx={{ fontSize: 14 }} variant={"h6"} component={"h6"} textAlign={"center"}>
                      {`${totalVotesOptionTwo} out of ${totalVotes} votes`}
                  </Typography>
              </CardContent>
          </Card>
          <Box display={"flex"} justifyContent={"end"}>
              <Button sx={{mt: 2}} variant={"outlined"} onClick={backClickHandler}>Back</Button>
          </Box>
      </Box>
  )
}

const LinearProgressWithLabel = (props) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(props.value,)}%`}</Typography>
            </Box>
        </Box>
    )

const YourVote = () => (
        <Box display={"flex"} justifyContent={"end"}>
            <IconButton aria-label="your vote" color={"success"}>
                <DoneIcon />
                <Typography> Your Vote</Typography>
            </IconButton>
        </Box>
    )
