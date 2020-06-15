import React, { useContext } from 'react';
import SiteContext from '../model/SiteContext';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import Landscape1 from '../components/pageTemplates/Landscape1';
import Landscape2 from '../components/pageTemplates/Landscape2';
import FrontCover from '../components/pageTemplates/FrontCover';
import BackCover from '../components/pageTemplates/BackCover';

const getPageTemplateByName = {
  Landscape1: Landscape1,
  Landscape2: Landscape2,
  FrontCover: FrontCover,
  BackCover: BackCover,
};

const OurPaper = styled(Paper)`
  page-break-before: always;
`;

function PrintPages() {
  const pages = [];
  const [state] = useContext(SiteContext);
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    const fields = state.pages[index].fields;

    // Get the template component for the page we are on
    const templateName = state.pages[index].pageTemplate;
    const Page = getPageTemplateByName[templateName];

    pages.push(
      <OurPaper>
        <Page fields={fields} />
      </OurPaper>,
    );
  });
  React.useEffect(() => {
    // TODO, this is a kludge, find an event that
    // allows us to detect when all the images are
    // ready to print. Without this we only get the
    // First one or two images.
    setTimeout(window.print, 2000);
  }, []);

  return <>{pages}</>;
}

export default PrintPages;
