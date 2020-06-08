import React from 'react';
import {
  Grid,
  Button,
  Container,
  // CssBaseline,
  // Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PrepareMeLogo from '../static/pm.png';
import styled from 'styled-components';

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

function LandingPage() {
  return (
    <Container maxWidth="sm">
      <Grid container direction="column">
        <Grid item>
          <Logo src={PrepareMeLogo} />
        </Grid>
        <Grid item>
          <h1>Welcome to our storybuilder!</h1>
          <span>What would you like to build today?</span>
        </Grid>
        <Grid item>
          <Button component={Link} to="/select-story-template">
            PICTURE STORY
          </Button>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </Container>
  );
}

export default LandingPage;
