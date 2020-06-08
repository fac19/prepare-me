import React from "react";
import { Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import PrepareMeLogo from "../static/pm.png";

function LandingPage() {
  return (
    <Grid container direction="column">
      <Grid item>
        <image src={PrepareMeLogo}></image>
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
  );
}

export default LandingPage;
