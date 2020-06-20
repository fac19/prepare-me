import React, { useContext } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
// import PrepareMeLogo from '../static/pm.png';
import styled from 'styled-components';
import BottomNavBar from '../components/BottomNavBar';
import SiteContext from '../model/SiteContext';
import { Swipeable } from 'react-swipeable';
import Div100vh from 'react-div-100vh';

/*
    This page displays buttons offering various options you might want once you have finished customising your template. It is currently displayed if you continue to navigate past the end of your story. 
*/

const MyGrid = styled(Grid)`
  height: 100%;
`;

function ActionsPage() {
  const [state] = useContext(SiteContext);
  const totalPages = state.pages.length;
  const history = useHistory();

  function handleRightSwipe(event) {
    history.push(`/story-page/${totalPages}`);
  }

  return (
    <Swipeable onSwipedRight={handleRightSwipe}>
      <Div100vh>
        <MyGrid
          container
          direction="column"
          alignContent="stretch"
          alignItems="center"
          justify="space-between"
        >
          <Grid item>&nbsp;</Grid>
          <Grid item>
            <Typography variant="h1" align="center">
              Looks like you finished.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h2" align="center">
              What would you like to do now?
            </Typography>
          </Grid>
          <Grid item>
            <Button component={Link}>Print</Button>
          </Grid>
          <Grid item>
            <Button component={Link}>Download</Button>
          </Grid>
          <Grid item>
            <Button data-cy="ReadMode" component={Link} to="/view-mode">
              Read Mode
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} to="/">
              Start Over
            </Button>
          </Grid>
          <Grid item>
            <BottomNavBar totalPages={totalPages} />
          </Grid>
        </MyGrid>
      </Div100vh>
    </Swipeable>
  );
}

export default ActionsPage;
