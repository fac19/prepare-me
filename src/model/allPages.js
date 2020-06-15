import React from 'react';
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

function allPages(state) {
  const pages = [];
  // const [state] = useContext(SiteContext);
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    const fields = item[index].fields;

    // Get the template component for the page we are on
    const templateName = item[index].pageTemplate;
    const Page = getPageTemplateByName[templateName];

    pages.push(
      <OurPaper>
        <Page fields={fields} />
      </OurPaper>,
    );
  });

  return pages;
}

export default allPages;
