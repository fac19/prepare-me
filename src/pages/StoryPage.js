import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import SiteState from '../model/SiteContext';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import Landscape1 from '../components/pageTemplates/Landscape1';
import Landscape2 from '../components/pageTemplates/Landscape2';
import FrontCover from '../components/pageTemplates/FrontCover';
import BackCover from '../components/pageTemplates/BackCover';

import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';

// const TopNavDiv = styled.div`
//   width: 100%;
//   height: 12vh;
//   background: blue;
// `;

// const TopNavBar = () => {
//   return <TopNavDiv />;
// };
const MyGrid = styled(Grid)`
  height: 100vh;
`;

const getPageTemplateByName = {
  Landscape1: Landscape1,
  Landscape2: Landscape2,
  FrontCover: FrontCover,
  BackCover: BackCover,
};

const OurPaper = styled(Paper)`
  height: 70vh;
  width: 50vh;
  background: green;
  margin: 0 auto;
`;

const StoryPage = () => {
  // Get our page number from the URL params
  const params = useParams();
  const pageNumber = Number(params.pageNumber);

  // Get the app state from SiteState context
  const [state] = useContext(SiteState);

  // Get the fields for the page we are on
  const fields = state.pages[pageNumber - 1].fields;

  // Get the template component for the page we are on
  const templateName = state.pages[pageNumber - 1].pageTemplate;
  const Page = getPageTemplateByName[templateName];

  console.log('pageNumber', pageNumber);
  console.log('fields', fields);
  console.log('templateName', templateName);

  return (
    <>
      <MyGrid container direction="column" justify="space-between">
        <Grid item>
          <TopNavBar pageNumber={pageNumber} />
        </Grid>
        <Grid item>
          <OurPaper>
            <Page pageNumber={pageNumber} fields={fields} />
          </OurPaper>
        </Grid>
        <Grid item>
          <BottomNavBar pageNumber={pageNumber} />
        </Grid>
      </MyGrid>
    </>
  );
};

export default StoryPage;
