import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import SiteContext from '../model/SiteContext';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';
import { Swipeable } from 'react-swipeable';

import ViewModeWarning from '../components/ViewModeWarning';

import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background: #000000;
  width: 100vw;
  height: 100vh;
`;

const OurPaper = styled(Paper)`
  height: 70vh;
  width: 50vh;
  margin: auto;
  margin-top: 15vh;
  margin-bottom: 15vh;
`;

const ViewMode = () => {
  const [alert, setAlert] = React.useState(true);

  // Set our initial pageNumber in local state
  const [pageNumber, setPageNumber] = useState(1);

  // Get the app state from SiteContext context
  const [state] = useContext(SiteContext);

  function handleKeydown(event) {
    if (event.key === 'ArrowRight') goForwards();
    if (event.key === 'ArrowLeft') goBackwards();
  }

  function goForwards() {
    if (pageNumber < totalPages) setPageNumber(pageNumber + 1);
    if (pageNumber === totalPages) history.goBack();
  }
  function goBackwards() {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
    if (pageNumber === 1) history.goBack();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }); // Note this DOES need to run every time!

  // Get the total number of pages, bale if there are none.
  const totalPages = state.pages.length;
  const history = useHistory();
  if (totalPages === 0) {
    history.goBack();
    return null; // Return early.
  }

  // Get the fields for the page we are on
  const fields = state.pages[pageNumber - 1].fields;

  // Get the template component for the page we are on
  const templateName = state.pages[pageNumber - 1].pageTemplate;
  const Page = getPageTemplateByName[templateName];

  return (
    <>
      <Wrapper>
        <Swipeable
          onSwipedRight={goBackwards}
          onSwipedLeft={goForwards}
          onSwipedUp={history.goBack}
        >
          <OurPaper>
            <Page pageNumber={pageNumber} fields={fields} active={false} />
          </OurPaper>
        </Swipeable>
      </Wrapper>

      {alert ? <ViewModeWarning alert={alert} setAlert={setAlert} /> : null}
    </>
  );
};

export default ViewMode;
