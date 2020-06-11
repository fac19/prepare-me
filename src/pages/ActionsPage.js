import React, { useContext } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import PrepareMeLogo from '../static/pm.png';
import styled from 'styled-components';
import BottomNavBar from '../components/BottomNavBar';
import SiteContext from '../model/SiteContext';

console.log('IN FINAL PAGE.');

const MyGrid = styled(Grid)`
  height: 100vh;
  /* border: 5px solid red; */
`;

function FinalPage() {
  const [state] = useContext(SiteContext);
  const totalPages = state.pages.length;

  return (
    <MyGrid
      container
      direction="column"
      alignContent="stretch"
      alignItems="center"
      justify="space-evenly"
    >
      <Grid item>
        <Typography variant="h1" align="center">
          Looks like you're finished.
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
        <Button component={Link}>Read Mode</Button>
      </Grid>
      <Grid item>
        <Button component={Link}>Start Over</Button>
      </Grid>
      <Grid item>
        {/* <BottomNavBar {...{ pageNumber, totalPages }} /> */}
        <BottomNavBar totalPages={totalPages} />
      </Grid>
    </MyGrid>
  );
}

export default FinalPage;
