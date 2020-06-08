import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
} from '@material-ui/core';
import styled from 'styled-components';

const StoryTemplates = () => {
  return (
    <Container maxWidth="sm">
      <Grid container direction="column">
        <Grid item>
          <h1>Select A Story Template</h1>
        </Grid>
        {/* <Grid item> */}
        <Card component={Link} to={'/blank-story-template'}>
          <CardMedia
            image="/public/logo192.png"
            title="Blank Template"
          ></CardMedia>
          <CardHeader title="Blank Template" />
        </Card>
        {/* </Grid> */}
        {/* <Grid item> */}
        <Card component={Link} to={'/school-story-template'}>
          <CardMedia component={'img'} src={'logo192.png'}></CardMedia>
          <CardHeader title="School Template" />
        </Card>
        {/* </Grid> */}
      </Grid>
    </Container>
  );
};

export default StoryTemplates;
