import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SiteContext from '../model/SiteContext';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Swipeable } from 'react-swipeable';

import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';
import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';

const MyGrid = styled(Grid)`
  height: 100vh;
`;

const OurPaper = styled(Paper)`
  height: 70vh;
  width: 50vh;
  // background: green;
  margin: 0 auto;
`;

const StoryPage = () => {
  // Get our page number from the URL params
  const params = useParams();
  const pageNumber = Number(params.pageNumber);

  // Get the app state from SiteContext context
  const [state] = useContext(SiteContext);

  // Get the total number of pages, bale if 0
  const totalPages = state.pages.length;
  const history = useHistory();
  if (totalPages === 0) {
    history.push({
      pathname: '/select-page-template',
      params: { pageNumber: 0 },
    });
    return null; // Return early.
  }

  // Get the fields for the page we are on
  const fields = state.pages[pageNumber - 1].fields;

  // Get the template component for the page we are on
  const templateName = state.pages[pageNumber - 1].pageTemplate;
  const Page = getPageTemplateByName[templateName];

  function handleLeftSwipe(event) {
    // console.log('LEFT SWIPE DETECTED');
    if (pageNumber < totalPages) history.push(`/story-page/${pageNumber + 1}`);
    if (pageNumber === totalPages) history.push('/actions-page');
  }
  function handleRightSwipe(event) {
    // console.log('RIGHT SWIPE DETECTED');
    if (pageNumber > 1) history.push(`/story-page/${pageNumber - 1}`);
    if (!pageNumber) history.push(`/story-page/${totalPages}`);
  }

  return (
    <>
      <Swipeable
        onSwipedRight={handleRightSwipe}
        onSwipedLeft={handleLeftSwipe}
      >
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
            <BottomNavBar {...{ pageNumber, totalPages }} />
          </Grid>
        </MyGrid>
      </Swipeable>
    </>
  );
};

export default StoryPage;
