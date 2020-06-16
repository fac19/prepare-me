import React from 'react';
import { Grid, Button, Link, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import PrepareMeLogo from '../static/pm.png';
import styled from 'styled-components';

const Logo = styled.img`
  height: 20vh;
`;

const MyGrid = styled(Grid)`
  height: 100vh;
`;

function LandingPage() {
  return (
    <MyGrid
      container
      direction="column"
      alignContent="stretch"
      alignItems="center"
      justify="space-evenly"
    >
      <Grid item>
        <Logo src={PrepareMeLogo} />
      </Grid>
      <Grid item>
        <Typography variant="h1" align="center">
          WELCOME TO OUR STORY BUILDER
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" align="center">
          WHAT WOULD YOU LIKE TO MAKE TODAY?
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        alignContent="stretch"
        alignItems="center"
        justify="space-evenly"
      >
        <Button component={RouterLink} to="/select-story-template">
          PICTURE STORY
        </Button>
        <Button component={RouterLink} to="/select-pecs-template">
          PECS
        </Button>
      </Grid>
      <Grid item>
        <Link href="https://prepareme.ie/" underline="always">
          <Typography variant="h3" align="center">
            Find out more here
          </Typography>
        </Link>
      </Grid>
    </MyGrid>
    // </Container>
  );
}

export default LandingPage;
