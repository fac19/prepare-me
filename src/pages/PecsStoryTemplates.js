import React from 'react';
import SiteContext from '../model/SiteContext';
import { useHistory } from 'react-router-dom';
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

/*
    This page allows the user to select from a list of pre-made PECS story templates or start a new story with a page template of their choosing.
*/

const MyGrid = styled(Grid)`
  height: 100vh;
`;

const MyCard = styled(Card)`
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.5s;
  }
`;

const MyTitle = styled(Typography)``;

const MyMedia = styled(CardMedia)`
  padding: 1em;
  height: 20vh;
  width: 30vw;
`;

const PecsStoryTemplates = () => {
  const [, dispatch] = React.useContext(SiteContext);
  const history = useHistory();

  const handleStoryClick = (event) => {
    const template = event.currentTarget.id;
    dispatch({ type: 'load story template', template });
    history.push('/story-page/1');
  };

  const handlePageClick = (event) => {
    const template = event.currentTarget.id;
    dispatch({ type: 'add page', template, pageNumber: 0 });
    history.push('/story-page/1');
  };

  return (
    <Container maxWidth="sm">
      <MyGrid
        container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        data-cy="PecsStoryGrid"
      >
        <Grid item>
          <MyTitle variant="h3" align="center">
            Select A PECS Template
          </MyTitle>
        </Grid>

        <MyCard id="Pecs12" onClick={handlePageClick} data-cy="PECS12BLANK">
          <MyMedia
            component="img"
            alt="12 card PECS template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="Blank Template"
          ></MyMedia>
          <CardHeader subheader="PECS 12 - BLANK" />
        </MyCard>

        <MyCard id="Pecs6" onClick={handlePageClick} data-cy="PECS6BLANK">
          <MyMedia
            component="img"
            alt="6 card PECS template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="Blank Template"
          ></MyMedia>
          <CardHeader subheader="PECS 6 - BLANK" />
        </MyCard>

        <MyCard id="pecsDoctor" onClick={handleStoryClick} data-cy="PecsDoctor">
          <MyMedia
            component="img"
            alt="Doctors Visit PECS card template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="Doctors Visit Premade Template"
          ></MyMedia>
          <CardHeader subheader="DOCTORS VISIT" />
        </MyCard>
      </MyGrid>
    </Container>
  );
};

export default PecsStoryTemplates;
