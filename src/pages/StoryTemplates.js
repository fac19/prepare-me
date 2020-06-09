import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardHeader,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';
import PrepareMeLogo from '../static/pm.png';

const MyGrid = styled(Grid)`
  height: 100vh;
`;

const MyTitle = styled(Typography)``;

const MyMedia = styled(CardMedia)`
  height: 20vh;
  width: 30vw;
`;

const StoryTemplates = () => {
  return (
    <Container maxWidth="sm">
      <MyGrid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item>
          <MyTitle variant="h3" align="center">
            Select A Story Template
          </MyTitle>
        </Grid>

        <Card component={Link} to={'/blank-story-template'}>
          <MyMedia
            component="img"
            alt="Blank Template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="Blank Template"
          ></MyMedia>
          <CardHeader subheader="Blank Template" />
        </Card>

        <Card component={Link} to={'/school-story-template'}>
          <MyMedia
            component="img"
            alt="School Template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="School Template"
          ></MyMedia>
          <CardHeader subheader="School Template" />
        </Card>
      </MyGrid>
    </Container>
  );
};

export default StoryTemplates;
