import React from 'react';
import SiteContext from '../model/SiteContext';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Card,
  CardMedia,
  CardHeader,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components';

// Images
import l1 from '../static/l1.svg';
import l2 from '../static/l2.svg';
import p2 from '../static/p2.svg';

const secondaryColor = '#0EB5BB';

const MyGrid = styled(Grid)`
  background-color: ${secondaryColor};
`;

const MyCard = styled(Card)`
  margin: 1em;
  width: 200px;
  transition: 0.3s;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: 0.5s;
  }
`;

const MyTitle = styled(Typography)`
  padding: 1em;
`;

const MyMedia = styled(CardMedia)`
  padding: 1em;
  height: 100%;
  width: 100%;
`;

const PageTemplates = () => {
  const [, dispatch] = React.useContext(SiteContext);
  const history = useHistory();
  const pageNumber = history.location.params.pageNumber;

  function handleClick(e) {
    console.log('ID:', e.currentTarget.id);
    dispatch({
      type: 'add page',
      template: e.currentTarget.id,
      pageNumber,
    });
    history.push(`/story-page/${pageNumber + 1}`);
  }

  return (
    <MyGrid container justify="space-around">
      <Grid item xs={12}>
        <MyTitle variant="h2" align="center" justify="space-between">
          Select A Page Template
        </MyTitle>
      </Grid>

      <Grid item>
        <MyCard
          id="SinglePicture"
          onClick={handleClick}
          data-cy="SinglePicture"
        >
          <MyMedia
            component="img"
            alt="Single Picture Template"
            image={l1}
            title="Single Picture"
          ></MyMedia>
          <CardHeader subheader="" />
        </MyCard>
      </Grid>

      <Grid item>
        <MyCard id="Landscape2" onClick={handleClick} data-cy="Landscape2">
          <MyMedia
            component="img"
            alt="Two Landscape Pictures with text at the bottom"
            image={l2}
            title="Two Landscape Pictures"
          ></MyMedia>
          <CardHeader subheader="" />
        </MyCard>
      </Grid>

      <Grid item>
        <MyCard id="Portrait2" onClick={handleClick} data-cy="Portrait2">
          <MyMedia
            component="img"
            alt="Two Pictures one the left, text on the right"
            image={p2}
            title="Two Portrait Pictures"
          ></MyMedia>
          <CardHeader subheader="" />
        </MyCard>
      </Grid>
    </MyGrid>
  );
};

export default PageTemplates;
