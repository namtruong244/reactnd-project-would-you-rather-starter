import {Box, Card, CardContent, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export const NotFoundPage = () => {
  return (
      <Box width="100%" height="100vh" display="flex" justifyContent="center" alignItems="center">
          <Card sx={{width: "45%"}}>
              <CardContent>
                  <Typography sx={{ fontSize: 24 }} variant="h1" component="h1" fontWeight="bold" gutterBottom>
                      Page Not Found
                  </Typography>
                  <Typography fontSize={16} variant="h5" component="h6" sx={{my: 2}}>
                      Looks like you've followed a broken link or entered a URL that doesn't exist on this site.
                  </Typography>
                  <Box sx={{ mb: 1.5, textDecoration: "none" }} component={NavLink} to={"/"}>
                      <Typography display="flex" alignItems="center" fontSize={15} color={"primary"}>
                          <ArrowBackIosIcon fontSize={"inherit"}/>Back to our site
                      </Typography>
                  </Box>
              </CardContent>
          </Card>
      </Box>
  )
}