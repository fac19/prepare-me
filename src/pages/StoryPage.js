import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import SiteContext from '../model/SiteContext';
import { Paper } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { Swipeable } from 'react-swipeable';

import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';
import TopNavBar from '../components/TopNavBar';
import BottomNavBar from '../components/BottomNavBar';

/*
    This is the page that renders the pages of the story on screen in editing mode (the default). It takes the page number to render from the URL. The component could be made to do all it's navigation internally rather than asking for a new URL each time (that is how we implemented View Mode) but we preferred to keep the component stateless and have the browser back button history work.
*/

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: ${(props) => props.bgcol};
  width: 100vw;
  height: 100vh;
`;

const MyGrid = styled(Grid)`
  height: 100vh;
`;

const OurPaper = styled(Paper)`
  height: 70vh;
  width: 50vh;
  margin: 0 auto;
`;

const StoryPage = () => {
  // Get our page number from the URL params
  const params = useParams();
  const pageNumber = Number(params.pageNumber);

  // Get the app state from SiteContext context
  const [state] = useContext(SiteContext);

  // Get the theme object
  const theme = useTheme();

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
    if (pageNumber < totalPages) history.push(`/story-page/${pageNumber + 1}`);
    if (pageNumber === totalPages) history.push('/actions-page');
  }
  function handleRightSwipe(event) {
    if (pageNumber > 1) history.push(`/story-page/${pageNumber - 1}`);
    if (!pageNumber) history.push(`/story-page/${totalPages}`);
  }

  return (
    <Wrapper bgcol={theme.palette.secondary}>
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
    </Wrapper>
  );
};

export default StoryPage;
