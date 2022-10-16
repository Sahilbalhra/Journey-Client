import { Container, Grid, Grow, createTheme, colors, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { Heading, NavBar,GridContainer } from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/postsAction";

const theme = createTheme({

  palette: {
    secondary: {
      main: colors.blue[500],
    }
  }

})
const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <NavBar position="static" color="inherit" >
          <Heading variant="h2" align="center">
            Memories
          </Heading>
        </NavBar>
        <Grow in>
          <Container>
            <GridContainer
              container
              justify="space-between"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </GridContainer>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
