import React from 'react';
import { Paper } from '@material-ui/core';
import styled from 'styled-components';

import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

const OurPaper = styled.div`
  page-break-before: always;
  height: 100vh;
`;

function allPages(state) {
  const pages = [];
  // const [state] = useContext(SiteContext);
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    console.log('INDEX', index);
    console.log('itemINDEX', item[index]);
    console.log('item', item);
    const fields = item.fields;

    // Get the template component for the page we are on
    const templateName = item.pageTemplate;
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
