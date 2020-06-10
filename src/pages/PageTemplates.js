import React from 'react';
// import SiteContext from '../model/SiteContext';
// import { useHistory } from 'react-router-dom';
import {
  Grid,
  Container,
  Card,
  CardMedia,
  CardHeader,
  Typography,
} from '@material-ui/core';
// import styled from 'styled-components';
import l1 from '../static/l1.svg';
import l2 from '../static/l2.svg';
import p1 from '../static/p1.svg';
import p2 from '../static/p2.svg';

const PageTemplates = () => {
  function handleClick(e) {
    console.log(e.target);
  }
  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
      >
        <Grid item>
          <Typography variant="h3" align="center">
            Select A Page Template
          </Typography>
        </Grid>
        <Grid item>
          <Card id="default-page-template" onClick={handleClick}>
            <CardMedia
              component="img"
              alt="landscape 1"
              height="150"
              width="30px"
              image={l1}
              title="Landsacape One"
            ></CardMedia>
            <CardHeader subheader="Default Template" />
          </Card>

          <Card>
            <CardMedia
              component="img"
              alt="landscape 2"
              height="150"
              width="30px"
              image={l2}
              title="Landscape Two"
            ></CardMedia>
            <CardHeader subheader="Landscape Two" />
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <CardMedia
              component="img"
              alt="portait one"
              height="150"
              width="30px"
              image={p1}
              title="Portrait One"
            ></CardMedia>
            <CardHeader subheader="Portrait One" />
          </Card>
        </Grid>

        <Grid item>
          <Card>
            <CardMedia
              component="img"
              alt="portait two"
              height="150"
              width="30px"
              image={p2}
              title="Portrait Two"
            ></CardMedia>
            <CardHeader subheader="Portrait Two" />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageTemplates;
