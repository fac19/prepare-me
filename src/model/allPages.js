import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

const OurPaper = styled(Paper)`
  page-break-before: always;
`;

function allPages(state) {
  const pages = [];
  // const [state] = useContext(SiteContext);
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    const fields = item.fields;

    // Get the template component for the page we are on
    const templateName = item.pageTemplate;
    const Page = getPageTemplateByName[templateName];

    pages.push(
      <OurPaper key={index}>
        <Page fields={fields} />
      </OurPaper>,
    );
  });

  return pages;
}

export default allPages;
