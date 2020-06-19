import React from 'react';
import styled from 'styled-components';
import getPageTemplateByName from '../components/pageTemplates/getPageTemplateByName';

/*
   This file creates an array of all the pages in the story.
   Each page is a page template component rendered with the appropriate fields.
*/

const OurPaper = styled.div`
  page-break-before: always;
  height: 90vh;
`;

function allPages(state) {
  const pages = [];
  state.pages.forEach((item, index) => {
    // Get the fields for the page we are on
    const fields = item.fields;

    // Get the template component for the page we are on
    const templateName = item.pageTemplate;
    const Page = getPageTemplateByName[templateName];

    // Render each component with the right fields and
    // push it onto the array.
    pages.push(
      <OurPaper key={index}>
        <Page fields={fields} />
      </OurPaper>,
    );
  });

  return pages;
}

export default allPages;
