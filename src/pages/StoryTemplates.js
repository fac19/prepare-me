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

const StoryTemplates = () => {
  const [, dispatch] = React.useContext(SiteContext);
  const history = useHistory();

  const handleClick = (event) => {
    const template = event.currentTarget.id;
    dispatch({ type: 'load story template', template });
    history.push('/story-page/1');
  };

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

        <MyCard id="blank" onClick={handleClick}>
          <MyMedia
            component="img"
            alt="Blank Template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="Blank Template"
          ></MyMedia>
          <CardHeader subheader="Blank Template" />
        </MyCard>

        <MyCard id="school" onClick={handleClick}>
          <MyMedia
            component="img"
            alt="School Template"
            height="150"
            width="30px"
            image={PrepareMeLogo}
            title="School Template"
          ></MyMedia>
          <CardHeader subheader="School Template" />
        </MyCard>
      </MyGrid>
    </Container>
  );
};

export default StoryTemplates;
