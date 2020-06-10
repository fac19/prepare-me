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
import p1 from '../static/p1.svg';
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
        <MyCard id="Landscape1" onClick={handleClick}>
          <MyMedia
            component="img"
            alt="landscape 1"
            image={l1}
            title="Landscape One"
          ></MyMedia>
          <CardHeader subheader="Default Template" />
        </MyCard>
      </Grid>

      <Grid item>
        <MyCard>
          <MyMedia
            component="img"
            alt="landscape 2"
            image={l2}
            title="Landscape Two"
          ></MyMedia>
          <CardHeader subheader="Landscape Two" />
        </MyCard>
      </Grid>

      <Grid item>
        <MyCard>
          <MyMedia
            component="img"
            alt="portrait one"
            image={p1}
            title="Portrait One"
          ></MyMedia>
          <CardHeader subheader="Portrait One" />
        </MyCard>
      </Grid>

      <Grid item>
        <MyCard>
          <MyMedia
            component="img"
            alt="portrait two"
            image={p2}
            title="Portrait Two"
          ></MyMedia>
          <CardHeader subheader="Portrait Two" />
        </MyCard>
      </Grid>
    </MyGrid>
  );
};

export default PageTemplates;
