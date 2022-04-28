import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material";

import Posts from "./component/Posts/Posts";
import Form from "./component/Form/Form";
import useStyles from "./styles";
import dio from "./images/dio.jpg";

const App = () => {
  // const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={""} position="static" color="inherit">
        <Typography className={""} variant="h2" align="center">
          Memories
        </Typography>
        <img src={dio} alt="dio" height="100" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

//axios for api request
//moment for time and date
//react-file-base64 convert images
//redux redux-thunk async actions using redux
//npm i @mui/material UI kit
