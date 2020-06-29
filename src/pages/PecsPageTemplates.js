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
import l2 from '../static/l2.svg';
import p2 from '../static/p2.svg';

/*
    This page offers a selection of page templates you may want to add to your PECS story
*/

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

const PecsPageTemplates = () => {
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
        <MyCard id="pecs6" onClick={handleClick} data-cy="pecs6">
          <MyMedia
            component="img"
            alt="6 card PECS template"
            image={l2}
            title="6 card PECS template"
          ></MyMedia>
          <CardHeader subheader="" />
        </MyCard>
      </Grid>

      <Grid item>
        <MyCard id="pecs12" onClick={handleClick} data-cy="pecs12">
          <MyMedia
            component="img"
            alt="12 card PECS template"
            image={p2}
            title="12 card PECS template"
          ></MyMedia>
          <CardHeader subheader="" />
        </MyCard>
      </Grid>
    </MyGrid>
  );
};

export default PecsPageTemplates;
