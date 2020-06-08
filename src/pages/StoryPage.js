import React, { useParams, useContext } from 'react';
import SiteState from '../model/SiteContext';

const StoryPage = () => {
  const params = useParams();
  const pageNumber = params.pageNumber;
  const [state, dispatch] = useContext(SiteState);
  const fields = state.pages[pageNumber - 1].fields;
  // get template name from state
  // get the component, as ThePage, by it's name

  return (
    <>
      {/* <TopNav pageNumber={pageNumber}/> */}
      {/* <ThePage pageNumber={pageNumber} fields={fields}/> */}
      {/* <BottomNav pageNumber={pageNumber}/> */} */}
    </>
  );
};

export default StoryPage;
